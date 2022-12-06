const mongoose = require("mongoose")

mongoose.Promise = global.Promise

require("dotenv").config()

console.log(`${process.env.DBPORT}/${process.env.DBNAME}`)

module.exports = mongoose.connect(`mongodb://${process.env.DBPORT}/${process.env.DBNAME}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado com sucesso")
}).catch(err => {
    console.log("Erro na conexão: "+err)})