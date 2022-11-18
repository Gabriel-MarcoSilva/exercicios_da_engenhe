var express = require('express')

const app = express()

//rotas: 

app.get("/", function(req, res){
    res.send("Seja bem-vindo ao seu back-end")
});

app.get("/sobre", function(req, res){
    res.send("Sobre nós")
})

//rota com parametro: 

app.get("/ola/:name", function(req, res){
    //res.send(req.params); //mostra os dados de cada parametro
    res.send("ola "+ req.params.name) //só pode usar o send uma vez
})

app.listen(3030, function(){
    console.log("server rodando na url: http://localhost:3030")
}); //localhost:3030

