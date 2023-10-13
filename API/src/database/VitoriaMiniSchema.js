const mongoose = require("mongoose")
const CompetidorSchema = require("./CompetidorSchema")

const Schema = mongoose.Schema

const VitoriaMini = new Schema({
    comp:{
        type: {CompetidorSchema},
        required: true
    },
    acabou:{
        type: Boolean
    }
})

module.exports = mongoose.model('VitoriaMini', VitoriaMini)
