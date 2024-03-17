import { db } from "../connect.js";
 import bcrypt from "bcryptjs"; 
//  import jwt from "jsonwebtoken";

 export const studentregister = (req, res) => {
    //CHECK USER IF EXISTS
  
     // Extract the email entered by the user from the request body
    
    const uniEmail = req.body.uniEmail;
console.log(uniEmail); // Add this line to log the email being checked
console.log("hello")


    // Prepare the SQL query to search for the email in the unidomains table
    const query = "SELECT * FROM unidomains WHERE uniEmail = ?";
    
  
    db.query(query, [uniEmail], (err, data) => {
        if (err) {
            // If there is an error executing the query, return a 500 status code with the error message
            return res.status(500).json(err);
        }

      if (data.length) {
            // If the query returns a row, it means the email exists in the unidomains table
            // return res.status(200).json("Email exists in the unidomains table.");


            // checking password logic
            
            // checking password logic


        //CREATE A NEW USER
      //Hash the password
      const salt = bcrypt.genSaltSync(10);
      const hasheduniPassword = bcrypt.hashSync(req.body.uniPassword, salt);
      const hashedweconnectPassword = bcrypt.hashSync(req.body.weconnectPassword, salt);
  
      const q =
        "INSERT INTO students (`first name`,`last name`,`uniEmail`,`date of birth`, `nationality`, `phone number`, `uniPass`, `Weconnect Pass`) VALUE (?)";
  
      const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.uniEmail,
        req.body.dob,
        req.body.nationality,
        req.body.phonenum,
        hasheduniPassword,
        hashedweconnectPassword,
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Student user has been created.");
      });

            
        }

        else {
            // If the query does not return any rows, it means the email does not exist in the table
            return res.status(404).json("Email does not exist in the unidomains table.");
        }



    });
  };