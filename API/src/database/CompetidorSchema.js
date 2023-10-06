const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Competidor = new Schema({
    nomeCompetidor: {
        type: String,
        required: true
    },
    equipe: {
        type: String,
        required: true,
    },
    modalidade: {
        type: String,
        required: true
    },
    pontuacao: {
        type: Number
    },
    ranking: {
        type: String,
    },
    nomeRobo: {
        type: String,
        required: true
    },
    linkGif: {
        type: String,
        required: true
    },
    linkRobo: {
        type: String,
        required: true
    },
    instituicao: {
        type: String,
        required: true
    },
    // linkQR:{
    //     type: String,
    //     required: true
    // }
})

module.exports = mongoose.model('Competidor', Competidor)