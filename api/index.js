import express from "express";
const app = express();
const PORT = process.env.PORT || 3500;
import mongoose from "mongoose";
import connectDB from './config/dbConn.js';
import * as dotenv from 'dotenv';
import cors from "cors";
import { participant } from "./Models/participant.js";

dotenv.config();
// const faciRoutes = require( "./routes/faci.js");
// const partiRoutes = require( "./routes/parti.js");



app.use(express.json());
app.use(cors());
connectDB()

app.get('/', async (req, res) => {

  
});

app.post("/info", async (req, res) =>{

  try{
  const {firstName, lastName, email} = req.body;
  const newParticipant = {
    firstName: firstName,
    lastName: lastName,
    email: email
  }

  //Check if the user already exist

  const user = await participant.find({firstName: firstName});
  if(user == null){
      const part = await participant.create(newParticipant)
      console.log(part)
      return res.status(201).send(part);
  }

  
  return res.send("User already exists.")
  }

  catch(err){
    console.log(err);
  }


})
app.get("/info", async (req, res)=>{
  try{
  console.log("hello world");
  const documents = await participant.find({firstName: "john"});
  return res.status(200).json({
    count: participant.length,
    data: documents
  });
  }
  catch(err){
    console.log(err);
  }
})

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  
})

// app.use("/api/facilitator", faciRoutes);
// app.use("/api/participant", partiRoutes);


mongoose.connection.on('error', err => {
  console.log(err)
  
})