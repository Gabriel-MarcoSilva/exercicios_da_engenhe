const mongoose = require("mongoose")
const CompetidorSchema = require("./CompetidorSchema")
const Schema = mongoose.Schema

const CorridaFollow = new Schema({
    comp1:{
        type: {
            CompetidorSchema
        },
        required: true
    },
    tempo:{
        type: {
            tempo1: String,
            tempo2: String,
            tempo3: String
        }
    },
    
})

module.exports = mongoose.model('CorridaFollow', CorridaFollow)