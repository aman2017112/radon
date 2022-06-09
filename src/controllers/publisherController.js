const publishModel= require("../models/publishModel")

const createpublish= async function (req, res) {
    let publish = req.body
    let publishCreated = await publishModel.create(publish)
    res.send({data: publishCreated})
}

const getPublishData= async function (req, res) {
    let publishs = await publishModel.find()
    res.send({data: publishs})
}

module.exports.createPublish=createpublish 
module.exports.getPublishData=getPublishData 