const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Message = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: SVGStringList,
        required: true,
        unique: true
    },
    messages:{
        type: String,
        required:true
    },
    done:{
        type: Boolean,
        default: false
    },
    created_at:{
        type: Date,
        default: new Date
    }
})

module.exports = mongoose.model('Message', Message)