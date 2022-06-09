const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
  //  publisher_Id:String,
    name: String,
    headQuarter:String
    
}, { timestamps: true });

module.exports = mongoose.model('newPublisher', publisherSchema)