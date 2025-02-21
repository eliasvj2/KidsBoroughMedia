import mongoose from "mongoose"

const participantSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    Books: {
        type: [String]
        
    }
    
})

export const participant = mongoose.model('Participant', participantSchema);