import express from "express";
const app = express();
const PORT = process.env.PORT || 3500;
import mongoose from "mongoose";
import connectDB from './config/dbConn.js';
import * as dotenv from 'dotenv';
import cors from "cors";
dotenv.config();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import orderRoutes from "./routes/order.js";
import cookieParser from "cookie-parser";

//middleware to read documents as json and allow cross origin resource sharing
app.use(express.json());
app.use(cors());
const users = [
  { id: '1', userName: 'John Doe', roles: 'User', active: true },
  { id: '2', userName: 'Jane Smith', roles: 'Admin', active: false },
];
//Databse connection
connectDB()
app.get("/users", (req, res)=>{
  res.header('X-Total-Count', users.length); // Add the X-Total-Count header
  res.header('Access-Control-Expose-Headers', 'X-Total-Count'); // Expose the header
  res.json(users);
})
//User routes and authorization routes.
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/order", orderRoutes);

//Allow the use of cookies
app.use(cookieParser);



//Database connection to mongoDB
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  
})

mongoose.connection.on('error', err => {
  console.log(err)
  
})