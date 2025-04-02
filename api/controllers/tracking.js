import mongoose from "mongoose";
import { Tracking } from "../Models/tracking.js";
import { Order } from "../Models/order.js";

export const getTracking = async(req, res)=>{
    // Get all users from MongoDB
    const tracking = await Tracking.find({}); 

    // Rename _id to id
    const formattedTracking = tracking.map(item => {
      const { _id, ...rest } = item.toObject(); // Convert to plain object
      return { id: _id, ...rest };
    });
    res.header('X-Total-Count', tracking.length); // Add the X-Total-Count header
    res.header('Access-Control-Expose-Headers', 'X-Total-Count'); 
    // If no users 
    if (!tracking?.length) {
        return res.status(400).json({ message: 'No users found' })
    }
   
    res.json(formattedTracking);
};

export const createTracking = async(req,res) =>{
    try{
    const { orderId, trackingNumber, shippingProvider, statusUpdates, location } = req.body

    
    // Does the order exist to update?
    const order = await Order.findById(id).exec()

    if (!order) {
        return res.status(400).json({ message: 'Order not found' })
    }

    
    const newTracking = {
        orderId: orderId,
        trackingNumber: trackingNumber,
        shippingProvider: shippingProvider,
        statusUpdates: statusUpdates,
        location: location
    }

    const tracking = Tracking.create(newTracking);
    return res.status(201).json(tracking);
}catch(err){
    console.log(err);
}
};

export const updateTracking = async(req, res)=>{
    try {
        const tracking = await Tracking.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true, runValidators: true } // Return updated document and run validators
        );
    
        if (!tracking) {
          return res.status(404).json({ message: 'Tracking not found' });
        }
    
        res.json(tracking);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
    };

export const deleteTracking = async(req,res) =>{
    try {
        const tracking = await Tracking.findByIdAndDelete(req.params.id);
    
        if (!tracking) {
          return res.status(404).json({ message: 'Tracking not found' });
        }
    
        res.json({ message: 'Tracking deleted successfully' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
};