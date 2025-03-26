import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    
    password: {
        type: String,
        required: true
    },
    roles :{
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    }]
    
})

export const User = mongoose.model('User', UserSchema);