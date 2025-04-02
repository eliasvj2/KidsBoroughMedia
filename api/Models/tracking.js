import mongoose from "mongoose";

const TrackingSchema = new mongoose.Schema({
  orderId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Order', 
    required: true },
  trackingNumber: { 
    type: String, 
    required: true },
  shippingProvider: { 
    type: String, 
    required: true },
  statusUpdates: [{
    timestamp: { 
        type: Date, 
        required: true },
    status: { 
        type: String, 
        required: true },
    location: { type: String },
  }],
}, 
{ timestamps: true });

export const Tracking = mongoose.model('Tracking', TrackingSchema);