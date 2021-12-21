import mongoose from 'mongoose'

export interface Books {
    title: String,
    pageCount: String,
    shortDescription: String,
    longDescription: String,
    status: String,
    authors: String[],
    categories: String[]
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    pageCount: {
        type: Number
    },
    shortDescription: {
        type: String
    },
    longDescription: {
        type: String
    },
    status: {
        type: String
    },
    authors: {
        type: Array
    },
    categories: {
        type: Array
    }
})

export default mongoose.model("BookModel", bookSchema)