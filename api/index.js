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
import { seedData } from './syntheticData.js';
import trackingRoutes from "./routes/tracking.js"
import documentRoutes from "./routes/document.js"

//middleware to read documents as json and allow cross origin resource sharing
app.use(express.json());
app.use(cors());

//Databse connection
connectDB()

//User routes and authorization routes.
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/order", orderRoutes);
app.use("/tracking", trackingRoutes);
app.use("/document", documentRoutes);

//Allow the use of cookies
app.use(cookieParser);



//Database connection to mongoDB
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  // seedData();
  
})

mongoose.connection.on('error', err => {
  console.log(err)
  
})