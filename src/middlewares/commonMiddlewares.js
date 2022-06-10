const moment = require('moment');


let loggedData = function (req,res,next){
    let log = moment().format('MMMM DD YYYY, h:mm:ss a');
    let ip = req.ip
    let path = req.path
    console.log(log,ip,path)
    next() 
}
// // const mid1= function ( req, res, next) {
// //     req.falana= "hi there. i am adding something new to the req object"
// //     console.log("Hi I am a middleware named Mid1")
// //     next()
// // }


// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

 module.exports.loggedData = loggedData
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
