var express = require("express");

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.listen(3030, function(){
    console.log("server rodando")
});