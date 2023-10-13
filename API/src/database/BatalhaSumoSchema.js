const mongoose = require("mongoose")
const CompetidorSchema = require("./CompetidorSchema")
const Schema = mongoose.Schema

const BatalhaSumo = new Schema({
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

module.exports = mongoose.model('BatalhaSumo', BatalhaSumo)