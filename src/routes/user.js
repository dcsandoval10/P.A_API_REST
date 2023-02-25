const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// Create user 
router.post("/adduser",(req, res) => {
    const user =  userSchema(req.body)
    user
        .save()
        .then((data)=>res.json({
            status_code: 200, 
            data: data, 
            }))
        .catch((error)=>res.json({
            status_code: 400,
            message: error}))
})

//Read users
router.get("/readuser",(req, res) => {
    userSchema
        .find()
        .then((data)=>res.json({
            status_code: 200, 
            data: data, 
            }))
        .catch((error)=>res.json({
            status_code: 400,
            message: error}))
})

//Find one user
router.get("/finduser/:id",(req, res) => {
    const {id} = req.params
    userSchema
        .findById(id)
        .then((data)=>res.json({
            status_code: 200, 
            data: data, 
            }))
        .catch((error)=>res.json({
            status_code: 400,
            message: error}))
})

//Update user
router.put("/updateuser/:id",(req, res) => {
    const {id} = req.params
    const {name, year, bio, image } = req.body
    userSchema
        .updateOne({_id: id}, { $set: {name, year, bio, image}})
        .then((data)=>res.json({
            status_code: 200, 
            data: data, 
            }))
        .catch((error)=>res.json({
            status_code: 400,
            message: error}))
})

//Delete user
router.delete("/deleteuser/:id",(req, res) => {
    const {id} = req.params
    
    userSchema
        .remove({_id: id})
        .then((data)=>res.json({
            status_code: 200, 
            data: data, 
            }))
        .catch((error)=>res.json({
            status_code: 400,
            message: error}))
})
module.exports = router