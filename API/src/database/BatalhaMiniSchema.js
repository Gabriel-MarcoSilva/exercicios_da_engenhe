const mongoose = require("mongoose")
const CompetidorSchema = require("./CompetidorSchema")
const VitoriaMiniSchema = require("./VitoriaMiniSchema")
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
    },
    vencedor:{
        type:  {
            VitoriaMiniSchema
        }
    }
})

module.exports = mongoose.model('BatalhaMini', BatalhaMini)