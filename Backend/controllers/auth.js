import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const studentregister = (req, res) => {
    const { uniEmail, uniPassword, firstname, lastname, dob, nationality, phonenum, weconnectPassword } = req.body;

    const query = "SELECT * FROM unidomains WHERE uniEmail = ?";

    db.query(query, [uniEmail], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }

        if (data.length === 0) {
            return res.status(404).json("Email does not exist");
        }

        // Assuming the password in the unidomains table is hashed
        const passwordIsValid = bcrypt.compareSync(uniPassword, data[0].uniPass);

        if (!passwordIsValid) {
          console.log("Wrong password!")
            return res.status(400).json("Wrong password!");
            
        }

        // If password is valid, hash the passwords for student entry
        const salt = bcrypt.genSaltSync(10);
        const hasheduniPassword = bcrypt.hashSync(uniPassword, salt);
        const hashedweconnectPassword = bcrypt.hashSync(weconnectPassword, salt);

        const insertQuery = `INSERT INTO students (\`first name\`, \`last name\`, \`uniEmail\`, \`date of birth\`, \`nationality\`, \`phone number\`, \`uniPass\`, \`Weconnect Pass\`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

        db.query(insertQuery, [firstname, lastname, uniEmail, dob, nationality, phonenum, hasheduniPassword, hashedweconnectPassword], (insertErr, insertData) => {
            if (insertErr) {
                return res.status(500).json(insertErr);
            }
            console.log("Student user has been created.")
            return res.status(200).json("Student user has been created.");
            
        });
    });
};




export const recruiterregister = (req, res) => {
  //CHECK USER IF EXISTS

  const q = "SELECT * FROM recruiters WHERE RecEmail = ?";

  db.query(q, [req.body.RecEmail], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }

    

    if (data.length) {
      console.log(data)
      console.log("Recruiter already exists!")
      return res.status(409).json("Recruiter already exists!");
    }
    
    //CREATE A NEW RECRUITER
    //Hash the password
    const salt = bcrypt.genSaltSync(10);
    const rechashedPassword = bcrypt.hashSync(req.body.RecPass, salt);

    const q =
      "INSERT INTO recruiters (`RecFirstname`,`RecLastname`,`RecEmail`,`CompanyName`, `RecCountry`, `RecPhoneNum`, `RecPass`) VALUES (?)";

    const values = [
      req.body.RecFirstname,
      req.body.RecLastname,
      req.body.RecEmail,
      req.body.CompanyName,
      req.body.RecCountry,
      req.body.RecPhoneNum,
      rechashedPassword
      
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      console.log("Recruiter has been created.")
      return res.status(200).json("Recruiter has been created.");
    });
  });
};





export const login = (req, res) => {

  // First, try to find the user in the students table.
  let q = "SELECT * FROM students WHERE uniEmail = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length > 0) {

      const checkPassword = bcrypt.compareSync(req.body.password, data[0].uniPass);
      if (!checkPassword) return res.status(400).json("Wrong password!");

      // Continue with login process for student...
      const token = jwt.sign({ id: data[0].id, type: "student" }, "secretkey");
      const { uniPass, ...others } = data[0];
      return res.cookie("accessToken", token, { httpOnly: true }).status(200).json(others);

    } else {

       // If not found in students, try recruiters table.
       q = "SELECT * FROM recruiters WHERE RecEmail = ?";

       
      db.query(q, [req.body.email], (err, data) => {
        if (err) return res.status(500).json(err);
        
        if (data.length === 0) return res.status(404).json("User not found!");

        const checkPassword = bcrypt.compareSync(req.body.password, data[0].RecPass);
        if (!checkPassword) return res.status(400).json("Wrong password!");

        // Continue with login process for recruiter...
        const token = jwt.sign({ id: data[0].id, type: "recruiter" }, "secretkey");
        const { Recpass, ...others } = data[0];
        return res.cookie("accessToken", token, { httpOnly: true }).status(200).json(others);


      });
    }
  });
};







