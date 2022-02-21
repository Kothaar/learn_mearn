const mongoose = require('mongoose')

const seriesSchema = mongoose.Schema({
    name: {
        type: String,
    },
    author: {
        type: String,
    }
})
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title value']
    },
    author: {
        type: [String],
        required: [true, 'Please add a author value']
    },
    published: {
        type: Date,
    },
    pages: Number,
    rating: Number,
    read: Boolean,
    series: seriesSchema,
    genre: [String],
    tags: [String],
    comments: String,

    
}, {
    timestamps: true
})

module.exports = mongoose.model('Book', bookSchema)