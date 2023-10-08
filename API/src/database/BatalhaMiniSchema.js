const mongoose = require("mongoose")
const CompetidorSchema = require("./CompetidorSchema")
const Schema = mongoose.Schema

const BatalhaMini = new Schema({
    comp1:{
        type: {
            CompetidorSchema
        },
        required: true
    },
    comp2:{
        type: {
            CompetidorSchema
        },
        required: true
    }
})

module.exports = mongoose.model('BatalhaMini', BatalhaMini)