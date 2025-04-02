import jwt from "jsonwebtoken";
import {faker} from "@faker-js/faker"
import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import { Document } from "../Models/document.js";


export const generate = async (req, res)=>{
    try{
   
        let newDocument = {
          userID: faker.lorem.word(8),
          price: faker.number.int(),  
          date: faker.date.past(),
          delivered: faker.lorem.word(),
          name: faker.person.firstName(),
          img: faker.image.avatar()
      }
      await Document.create(newDocument);
              
      return res.status(200).json(newDocument);
                  
  
    }catch(error){
      console.log(error);
    }
  };

  export const getAllDocuments= async (req, res)=>{
    try{
   
       const documents = await Document.find({}); 
       
           // Rename _id to id
           const formattedDocuments = documents.map(document => {
             const { _id, ...rest } = document.toObject(); // Convert to plain object
             return { id: _id, ...rest };
           });
           res.header('X-Total-Count', documents.length); // Add the X-Total-Count header
           res.header('Access-Control-Expose-Headers', 'X-Total-Count'); 
           // If no users 
           if (!documents?.length) {
               return res.status(400).json({ message: 'No users found' })
           }
          
           res.json(formattedDocuments);
                  
  
    }catch(error){
      console.log(error);
    }
  };

  export const documentByUserId = async (req, res)=>{
    try {
        const documents = await Document.find({ userId: req.params.userId });
    
        if (!documents || documents.length === 0) {
          return res.status(404).json({ message: 'Documents not found for this user' });
        }
    
        res.json(documents);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
  };

  export const addDocument = async (req, res)=>{
    try {
        const newDocument = new Document(req.body);
        const savedDocument = await newDocument.save();
        res.status(201).json(savedDocument); // 201 Created
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err.message });
      }
  };

  export const updateDocumentById = async (req, res)=>{
    try {
        const updatedDocuments = await Document.updateMany(
          { userId: req.params.id },
          req.body,
          { new: true, runValidators: true }
        );
    
        if (updatedDocuments.modifiedCount === 0) {
          return res.status(404).json({ message: 'No documents found for this user to update' });
        }
    
        res.json({ message: `${updatedDocuments.modifiedCount} documents updated successfully` });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
  };

  export const deleteDocumentById = async (req, res)=>{
    try {
        const deletedDocuments = await Document.deleteMany({ userId: req.params.userId });
    
        if (deletedDocuments.deletedCount === 0) {
          return res.status(404).json({ message: 'No documents found for this user to delete' });
        }
    
        res.json({ message: `${deletedDocuments.deletedCount} documents deleted successfully` });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
  }


