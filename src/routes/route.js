const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
const BookModel= require("../models/bookModel.js")
const AuthorModel= require("../models/authorModel.js")
const bookController= require("../controllers/bookController.js")
router.get("/test-me2", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", bookController.createAuthor )
router.post("/createBook", bookController.createBook )
router.get("/getBooksByChetanBhagat", bookController.getBooksByChetanBhagat)
router.get("/authorOfBook", bookController.authorOfBook)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

// //MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

module.exports = router;