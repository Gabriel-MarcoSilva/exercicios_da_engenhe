const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Glossario = new Schema({
    id:{
        type: Number,
        unique: true
    },
    palavra:{
        type: String,
        required: true,
        unique: true
    },
    descricao:{
        type: String,
        required: true,
    },
    vinculo:{
        type: String,
    }
})

module.exports = mongoose.model('Glossario', Glossario)