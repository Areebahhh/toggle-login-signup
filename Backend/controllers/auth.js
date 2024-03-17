// import { db } from "../connect.js";
//  import bcrypt from "bcryptjs"; 
//  import jwt from "jsonwebtoken";

//  export const studentregister = (req, res) => {
//     //CHECK USER IF EXISTS
  
//      // Extract the email entered by the user from the request body
    
//     const uniEmail = req.body.uniEmail;
// console.log(uniEmail); // Add this line to log the email being checked
// console.log("hello")


//     // Prepare the SQL query to search for the email in the unidomains table
//     const query = "SELECT * FROM unidomains WHERE uniEmail = ?";
    
  
//     db.query(query, [uniEmail], (err, data) => {
//         if (err) {
//             // If there is an error executing the query, return a 500 status code with the error message
//             return res.status(500).json(err);
            
//         }

//         if (data.length === 0) {
//           return res.status(404).json("Email does not exist");
//         }
        
//         // Assuming uniPass is the name of the field in the request body for the password
//         const passwordIsValid = bcrypt.compareSync(req.body.uniPassword, data[0].uniPass);
        
//         console.log(req.body.uniPassword);
//         console.log(data[0].uniPass);

//         console.log("Password valid:", passwordIsValid);


//         if (!passwordIsValid) {
//           return res.status(400).json("Wrong password or email!");
//       }

//        // Assuming the validation is successful, and we proceed to create the user
//         // Hash the passwords
//         const salt = bcrypt.genSaltSync(10);
//         const hasheduniPassword = bcrypt.hashSync(req.body.uniPassword, salt);
//         const hashedweconnectPassword = bcrypt.hashSync(req.body.weconnectPassword, salt);



//         // Your INSERT query
//         const insertQuery = "INSERT INTO students (`first name`, `last name`, `uniEmail`, `date of birth`, `nationality`, `phone number`, `uniPass`, `Weconnect Pass`) VALUES (?)";
//         const values = [
//             req.body.firstname,
//             req.body.lastname,
//             req.body.uniEmail,
//             req.body.dob,
//             req.body.nationality,
//             req.body.phonenum,
//             hasheduniPassword,
//             hashedweconnectPassword,
//         ];

//         db.query(insertQuery, [values], (insertErr, insertData) => {
//             if (insertErr) return res.status(500).json(insertErr);
//             return res.status(200).json("Student user has been created.");




//           });
//         });
//     };






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





























      // if (data.length) {
      //       // If the query returns a row, it means the email exists in the unidomains table
      //       // return res.status(200).json("Email exists in the unidomains table.");


      //       // CHECKING PASSWORD'S LOGIC
      //       // Assuming data[0] contains the user row
      //   const user = data[0];
      //    // Now compare the hashed password
      //    const passwordIsValid = bcrypt.compareSync(req.body.uniPassword, user.uniPass);
      //    console.log(req.body.uniPassword);
      //    console.log(user.uniPass);

      //    if (passwordIsValid) {
      //     // Proceed with user creation

      //       // CHECKING PASSWORD'S LOGIC


      //   //CREATE A NEW USER
      // //Hash the password
      // const salt = bcrypt.genSaltSync(10);
      // const hasheduniPassword = bcrypt.hashSync(req.body.uniPassword, salt);
      // const hashedweconnectPassword = bcrypt.hashSync(req.body.weconnectPassword, salt);


            
      //   }
      //   else {
      //      // Password does not match
      //      return res.status(401).json("Password does not match.");
      //   }
      // }

      //   else {
      //       // If the query does not return any rows, it means the email does not exist in the table
      //       return res.status(404).json("Email does not exist in the unidomains table.");
      //   }



    // });
