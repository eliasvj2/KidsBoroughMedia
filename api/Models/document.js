import mongoose from "mongoose"

const DocumentSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' }, // Optional, for user docs
    orderId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Order' }, // Optional, for order docs
    fileName: { 
        type: String, 
        required: true },
    fileType: { 
        type: String, 
        required: true },
    fileUrl: { 
        type: String, 
        required: true }, // URL to the stored document (e.g., S3)
  }, 
  { timestamps: true });
  
  export const Document = mongoose.model('Document', DocumentSchema);