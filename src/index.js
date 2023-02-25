// import express from 'express';
const express = require("express")
// import mongoose, { mongo } from 'mongoose';
const mongoose = require("mongoose")
require("dotenv").config();
// import dotenv from 'dotenv'

const userRoutes = require("./routes/user")

const app = express()
const PORT = process.env.PORT || 9000;
// const configuracion = dotenv.config()

//Middleware
app.use(express.json())
app.use('/api', userRoutes)


app.listen(PORT, () => console.log('Server listening on port', PORT))

app.get('/', (req,res) => {
    res.send("welcome to my API")
})

mongoose.connect(
    process.env.MONGODB_URI
).then(()=> console.log("Connected to MongoDB Atlas"))
.catch((err)=> console.error(err))