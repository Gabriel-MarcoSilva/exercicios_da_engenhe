const express = require('express')

require('./src/database')

class App{
    constructor(){
        this.server = express();
    }

    routes(){

    }

    middleware(){

    }

}

module.exports = new App().server