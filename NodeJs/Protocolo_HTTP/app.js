var http = require('http')

http.createServer(function(req, res){
    res.end("olá")
}).listen(3030);

console.log("Servidor rodando com sucesso")