import mongoose from "mongoose";

const Schema = mongoose.Schema;

const order = new Schema({
	orderID: {
    type: Number,
    required: true,
	},
	datetime: {
    type: String,
    required: true
  },
  userID: {
    type: String,
    required: true
  }
  
});

export const Order = mongoose.model('Order', order);