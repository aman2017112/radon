const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

// const createAuthor1= async function (req, res) {
//     let data = req.body
//     let authorId = data.author_Id
// if(!authorId) return res.send({msg:'the details is required'})
//     let savedData = await AuthorModel.create(data)
//     res.send({data: savedData})
// }


//module.exports.createAuthor1= createAuthor1

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData