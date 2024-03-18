import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
// import cookieParser from "cookie-parser";
// const port = 3001; 
// Make sure this port doesn't conflict with your frontend port
import mysql from 'mysql';
import bcrypt from 'bcryptjs';
import bodyParser from 'body-parser';
import cors from "cors"
import { db } from "./connect.js";



//middlewares

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

 app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(bodyParser.json());

// app.use(cookieParser());

// app.get('/', (req, res) => {
//   res.send('Hello World from Backend!');
// });

// app.listen(port, () => {
//   console.log(`Backend server is listening at http://localhost:${port}`);
// });


app.listen(8800, () => {
  console.log("API working!");
});

app.use("/api/auth", authRoutes);

// BACKEND API FOR SENDING DATA INTO THE UNIDOMAINS TABLE

app.post('/add-to-unidomains', (req, res) => {
  const { uniEmail, uniPass, uniName } = req.body;

   // Hash the uniPass
   const salt = bcrypt.genSaltSync(10);
   const hashedUniPass = bcrypt.hashSync(uniPass, salt);

  // Insert into database
  const query = 'INSERT INTO unidomains (uniEmail, uniPass, uniName) VALUES (?, ?, ?)';

  db.query(query, [uniEmail, hashedUniPass, uniName], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error adding data to unidomains');
    }
    res.status(200).send('Data added successfully');
  });
});

// BACKEND API FOR SENDING DATA INTO THE UNIDOMAINS TABLE



