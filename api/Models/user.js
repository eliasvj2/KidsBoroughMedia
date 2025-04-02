import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    username: {
         type: String, 
         required: true, 
         unique: true },
    password: { type: String, 
        required: true }, // Store hashed passwords
    email: { type: String,
         required: true,
          unique: true },
    role: { type: String, 
        enum: ['participant', 'facilitator', 'Admin'], 
        required: true },
    name: { type: String },
    contactDetails: {
    phone: { type: String },
    address: { type: String },
  },
}, { timestamps: true });

export const User = mongoose.model('User', UserSchema);