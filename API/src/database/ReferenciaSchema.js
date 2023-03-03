const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Referencia = new Schema({
    id:{
        type: Number,
        unique: true
    },
    author:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true,
    },
    subtitle:{
        type: String,
        required: true
    },
    numEdition:{
        type: Number,
    },
    publisher:{
        type: String,
        required:true
    },
    created_at:{
        type: String,
        required:true
    },
    updated_at:{
        type: String,
        required:true
    },
    publication:{
        type: String,
        required:true
    },
    Pag:{
        type: Number,
    },
    Vol:{
        type: Number,
    },
    Year:{
        type: Number,
    }
})

module.exports = mongoose.model('Referencia', Referencia)