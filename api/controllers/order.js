import jwt from "jsonwebtoken";
import { Order } from "../Models/order.js";
import {faker} from "@faker-js/faker"
import { User } from "../Models/user.js";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";

export const generate = async (req, res)=>{
  try{
 
      let newOrder = {
        userID: faker.lorem.word(8),
        price: faker.number.int(),  
        date: faker.date.past(),
        delivered: faker.lorem.word(),
        name: faker.person.firstName(),
        img: faker.image.avatar()
    }
    await Order.create(newOrder);
            
    return res.status(200).json(newOrder);
                

  }catch(error){
    console.log(error);
  }
}
export const getAllOrders = async(req,res)=>{
    try {
      const orders = await Order.find({}); // Fetch all orders, including _id

      // Rename _id to id
      const formattedOrders = orders.map(order => {
        const { _id, ...rest } = order.toObject();
        return { id: _id, ...rest };
      });
        
        res.header('X-Total-Count', orders.length); // Add the X-Total-Count header
        res.header('Access-Control-Expose-Headers', 'X-Total-Count'); // Expose the header
        return res.status(200).json(formattedOrders);
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
      }
};

export const orderByUserId = async(req, res)=>{
  try{
 
    const id = new ObjectId(req.body.userId);
    
    const user = await Order.findById(id);
    return res.status(201).send(user);

  }catch(error){
    console.log(error.message);
    res.status(500).send({message: error.message});
  }
}

export const addOrderToUser = async(req,res)=>{
    try {
       const id = new ObjectId(req.body.id );
       const orderId = req.body.orderId;

        
      const user = await User.findByIdAndUpdate(
        id,
        { $push: { orders: orderId } },
        { new: true } // Return the updated document
      );
      
      return res.status(201).send(user);
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
      }
};

export const updateOrderById = async(req, res)=>{
    try {
        if (
            !request.body.orderID ||
            !request.body.userID ||
            !request.body.product ||
            !request.body.price
        ) {
          return response.status(400).send({
            message: 'Send all required fields: orderID, userID, product, price',
          });
        }
    
        const { id } = request.params;
    
        const result = await Order.findByIdAndUpdate(id, request.body);
    
        if (!result) {
          return response.status(404).json({ message: 'Order not found' });
        }
    
        return response.status(200).send({ message: 'Order updated successfully' });
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
    
};

export const deleteOrderById = async(req,res) =>{
    try {
        const { id } = request.params;
    
        const result = await Order.findByIdAndDelete(id);
    
        if (!result) {
          return response.status(404).json({ message: 'Order not found' });
        }
    
        return response.status(200).send({ message: 'Order deleted successfully' });
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
};