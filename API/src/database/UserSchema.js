const mongoose = require("mongoose")

const Schema = mongoose.Schema

const User = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    types:{
        type: String,
        enum:["ROOT", "USER"],
        default:"USER"
    },
    created_at:{
        type: Date,
        default: new Date
    }
})

module.exports = mongoose.model('User', User)