import mongoose from "mongoose";

const Schema = mongoose.Schema;

const order = new Schema({
	orderID: {
    type: Number,
    required: true,
	},
  userID: {
    type: String,
    required: true,
    ref: "User"
  },
  product: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
  
},
{
  timestamps: true
});

export const Order = mongoose.model('Order', order);