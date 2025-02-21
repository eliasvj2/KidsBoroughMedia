import mongoose from "mongoose";



const infoSchema = new mongoose.Schema({
    userID: {
        type: Number,
        required: true,
        },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        require: true
    },
    schoolName: {
        type: String,
        require: true
    }
    
})

export const info = mongoose.model('Participant', infoSchema);