import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    bookID: {
        type: Number,
        required: true,
        },
    
    imageURL: {
        type: [String]
        
    }
    
})

export const Book = mongoose.model('Book', bookSchema);