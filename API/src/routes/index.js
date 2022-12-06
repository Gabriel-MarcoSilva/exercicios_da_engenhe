const express = require('express')
const UserController = require("../app/controller/UserController")
const routes = express.Router()

routes.get('/', (req, res) => {
    res.status(200).json({
        "messages": "Tudo ok"
    })
})

routes.post("/signup", UserController.signup)


routes.get("/signup", UserController.userList)

module.exports = routes