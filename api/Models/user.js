import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    userID: {
        type: Number,
        required: true,
        },
    name:{
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        street: {
            type: String
        },
        zipcode: {
            type: String
        },
        place: {
            type: String
        }
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    roles :{
        type: String,
        default: "User"
    },
    active: {
        type: Boolean,
        default: true
    },
    orders: {
        type: [String]
        
    }
    
})

export const User = mongoose.model('User', UserSchema);