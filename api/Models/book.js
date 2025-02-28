import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    bookID: {
        type: Number,
        required: true,
        },
    
    image: {
        type: [String]
        
    },
    order:{
        type: String,
        required: true
    }
    
})

export const Book = mongoose.model('Book', bookSchema);