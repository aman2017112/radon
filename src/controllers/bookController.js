const mongoose = require('mongoose')
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publishModel=require("../models/publishModel")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}
const createBook1= async function (req, res) {
    let book = req.body
    if(!mongoose.isValidObjectId(book.author_Id))
    return res.send({msg:"the author is not present"})
    if(!mongoose.isValidObjectId(book.publisher_Id))
    return res.send({msg:"the publisher is not present"})
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}


const getBooksWithAuthorDetails = async function (req, res) { 
    let specificBook = await bookModel.find().populate('author_id').populate('publisher_id') 
    //let specificBook = await bookModel.find().populate(['author_id','publisher_id'])
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.createBook1= createBook1
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
//module.exports.createAuthor1 = createAuthor1