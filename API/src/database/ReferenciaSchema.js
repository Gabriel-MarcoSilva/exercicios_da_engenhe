const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Referencia = new Schema({
    id:{
        type: Number,
        unique: true
    },
    autor:{
        type: {},
        required: true
    },
    titulo:{
        type: String,
        required: true,
    },
    subtitulo:{
        type: String,
        required: true
    },
    numEdicao:{
        type: Number,
    },
    editora:{
        type: String,
        required:true
    },
    publicacao:{
        type: String,
        required:true
    },
    pag:{
        type: Number,
    },
    vol:{
        type: Number,
    },
    ano:{
        type: Number,
    },
    vinculo:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Referencia', Referencia)