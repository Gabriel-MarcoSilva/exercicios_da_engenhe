const mongoose = require("mongoose")
const CompetidorSchema = require("./CompetidorSchema")

const Schema = mongoose.Schema

const Vitoria = new Schema({
    comp:{
        type: {CompetidorSchema},
        required: true
    },
    acabou:{
        type: Boolean
    }
})

module.exports = mongoose.model('Vitoria', Vitoria)
