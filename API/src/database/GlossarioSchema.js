const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Glossario = new Schema({
    id:{
        type: Number,
        unique: true
    },
    keyWord:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true,
    },
    created_at:{
        type: String,
        required: true
        //type: Date,
        //default: new Date
    },
    updated_at:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Glossario', Glossario)