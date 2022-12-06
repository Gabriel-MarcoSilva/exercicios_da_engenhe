const express = require('express')

const routes = require('./src/routes')

require('./src/database')

class App{
    constructor(){
        this.server = express();
        this.routes()
    }

    routes(){
        this.server.use(routes)
    }

    middleware(){
        this.server.use(express.json())
    }

}

module.exports = new App().server