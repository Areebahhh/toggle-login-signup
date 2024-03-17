import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
// import cookieParser from "cookie-parser";
// const port = 3001; 
// Make sure this port doesn't conflict with your frontend port

import cors from "cors"




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
