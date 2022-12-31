const jwt = require('jsonwebtoken')
const authConfig = require("../config/authConfig.json")
const { promisify } = require('util')
const UserSchema = require("../database/UserSchema")

class validationsUser {
    async validatioinToken(req, res, next) {
        const authorization = req.headers.authorization
        if (!authorization) return res.status(500).json({ "message": "token não enviado" })

        try {
            const decoded = await promisify(jwt.verify)(authorization, authConfig.secret) //verifica o token
            req.id_user = decoded._id
            return next(); //autorizar o token
        } catch (err) {
            res.status(400).json({ "message": "token invalido" })
        }
    }

    async validationUser(req, res, next) {
        const authorization = req.headers.authorization

        if (!authorization) return res.status(401).json({ "message": "token invalido" })

        try {
            const decoded = await promisify(jwt.verify)(authorization, authConfig.secret)

            const user = await UserSchema.findOne({ _id:decoded._id })

            if (user.types === "ROOT") return next()

            return res.status(404).json({ "message": "Nao autorizado" })
        } catch (err) {
            res.status(400).json({ "message": "token invalido" })

        }
    }
}


module.exports = new validationsUser()