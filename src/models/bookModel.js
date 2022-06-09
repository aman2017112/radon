const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "newAuthor",
        required :[true,'this field is required']
         },
    price: Number,
    ratings: Number,
    publisher_id:{

        type :ObjectId,
        ref: "newPublisher",
        required :[true,'this detail is required']
    },

}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)   //books
