import mongoose from "mongoose";

const Schema = mongoose.Schema;

const order = new Schema({
	
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  delivered: {
    type: String,
    required: true
  }
  
},
{
  timestamps: true
});

export const Order = mongoose.model('Order', order);