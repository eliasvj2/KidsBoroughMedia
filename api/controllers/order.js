import jwt from "jsonwebtoken";
import { Order } from "../Models/order.js";


export const getAllOrders = async(req,res)=>{
    try {
        const orders = await Order.find({});
    
        return response.status(200).json({
          count: orders.length,
          data: orders,
        });
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
};

export const createOrder = async(req,res)=>{
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
        const newOrder = {
          orderID: request.body.orderID,
          userID: request.body.userID,
          product: request.body.product,
          price: request.body.price

        };
    
        const order = await Order.create(newOrder);
    
        return response.status(201).send(newOrder);
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
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