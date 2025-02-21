import mongoose from "mongoose"

const facilitatorSchema = new mongoose.Schema({
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
    Students: {
        type: [String]
        
    }
    
})

export const facilitator = mongoose.model('facilitator', facilitatorSchema);