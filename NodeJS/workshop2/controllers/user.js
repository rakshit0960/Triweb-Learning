const userModel = require('../models/user');

module.exports.register = async (req, res) => {
    console.log(req.body)
    let insertedID = await userModel.create(req.body);
    console.log(insertedID);
}

module.exports.get =  async (req, res) => {
    let data  = await userModel.get(req.body);
    if (data) {
        res.send({status: "success", data: data})
    } else {
        res.send({status: "error", message: "No User Found"})
    }
}

module.exports.update = async (req, res) => {
    let status  = await userModel.update(req.body);
    if (status) {
        res.send({status: "success", message: "user Data Updated"})
    } else {
        res.send({status: "error", message: "No User Found"})
    }
}

module.exports.delete = async (req, res) => {
    let status  = await userModel.update(req.body);
    if (status) {
        res.send({status: "success", message: "user Deleted"})
    } else {
        res.send({status: "error", message: "User not Found"})
    }
}