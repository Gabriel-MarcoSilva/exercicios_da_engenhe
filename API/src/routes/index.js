const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.status(200).json({
        "messages": "Tudo ok"
    })
})

module.exports = routes