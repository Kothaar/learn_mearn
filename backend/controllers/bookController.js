const asyncHandler = require('express-async-handler')

const Book = require('../models/bookModel')
// @desc Get Books
// @route GET /api/v1/books
// @access Private
const getBooks = asyncHandler (async (req, res) => {
    const books = await Book.find()
    res.status(200).json(books)
})

// @desc set Books
// @route POST /api/v1/books
// @access Private
const setBook = asyncHandler (async (req, res) => {
    if(!req.body.title){
        res.status(400)
        throw new Error("Pleaser add a title field")
    }

    const book = await Book.create({
        title: req.body.title,
        author: req.body.author,
        published: req.body.published,
        pages: req.body.pages,
        rating: req.body.rating,
        read: req.body.read,
        series: req.body.series,
        genre: req.body.genre,
        tags: req.body.tags,
        comments: req.body.comments,
    })

    res.status(200).json(book)
})

// @desc update books
// @route UPDATE /api/v1/books/:id
// @access Private
const updateBook = asyncHandler (async (req, res) => {
    const book = await Book.findById(req.params.id)
    if(!book) {
        res.status(400)
        throw new Error('Book not found')
    }

    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedBook)
})

// @desc delete books
// @route DELETE /api/v1/books/:id
// @access Private
const deleteBook = asyncHandler (async (req, res) => {
    const book = await Book.findById(req.params.id)
    if(!book) {
        res.status(400)
        throw new Error('Book not found')
    }

    await book.remove()

    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getBooks,
    setBook,
    updateBook,
    deleteBook
}