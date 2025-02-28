
import jwt from "jsonwebtoken";
import { User } from "../Models/user";

export const getAllUsers = async(req, res)=>{

};

export const createUser = async(req,res) =>{

};

export const updateUser = async(req, res)=>{

};

export const deleteUser = async(req,res) =>{

};
// try{ example to insert to mongoDB
//   const {firstName, lastName, email} = req.body;
//   const newParticipant = {
//     firstName: firstName,
//     lastName: lastName,
//     email: email
//   }

//   //Check if the user already exist

//   const user = await participant.find({firstName: firstName});
//   if(user == null){
//       const part = await participant.create(newParticipant)
//       console.log(part)
//       return res.status(201).send(part);
//   }

  
//   return res.send("User already exists.")
//   }

//   catch(err){
//     console.log(err);
//   }
// app.get("/info", async (req, res)=>{
//   try{ Example to get from mongoDB
//   console.log("hello world");
//   const documents = await participant.find({firstName: "john"});
//   return res.status(200).json({
//     count: participant.length,
//     data: documents
//   });
//   }
//   catch(err){
//     console.log(err);
//   }
// })