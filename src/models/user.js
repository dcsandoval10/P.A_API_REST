const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String, 
    year: Number, 
    bio: String,
    image: String

})

module.exports = mongoose.model('user', userSchema)