const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    deescription: {
        type: String,
        required: true
    },
    publishedDate: {
        type: String,
        required: true
    }, 
    image: {
        type: String,
        required: true
    },
    bookId: {
        type: String,
        required: true,
        unique: true
    },
    selfLink: {
        type: String,
        required: true
    },
    previewLink: {
        type: String,
        required: true
    },
    infoLink: {
        type: String,
        required: true
    },
    viewability: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Book', bookSchema)