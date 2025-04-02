import mongoose from "mongoose";

const Schema = mongoose.Schema;

const order = new Schema({
	
  participantId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', required: true },
  orderDate: { 
    type: Date, 
    required: true },
  items: [{
    itemName: { type: String, required: true },
    quantity: { type: Number, required: true },
  }],
  totalAmount: { 
    type: Number, 
    required: true },
  status: { 
    type: String, 
    enum: ['pending', 'shipped', 'delivered'], 
    default: 'pending' },
}, 
{ timestamps: true });

export const Order = mongoose.model('Order', order);