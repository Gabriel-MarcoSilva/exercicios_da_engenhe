const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Competidor = new Schema({
    id:{
        type: Number,
        unique: true
    },
    nomeCompetidor:{
        type: String,
        required: true
    },
    equipe:{
        type: String,
        required: true,
    },
    modalidade:{
        type: String,
        required: true
    },
    ranking:{
        type: Number,
    },
    nomeRobo:{
        type: String,
        required:true
    },
    linkGif:{
        type: String,
        required:true
    },
    linkRobo:{
        type: String,
        required:true
    },
    instituicao:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Competidor', Competidor)