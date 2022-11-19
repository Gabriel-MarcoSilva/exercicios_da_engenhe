cria uma pasta e coloca o arquivo html 

em vez de res.send, usa a função sendFile(__dirname + "diretório do arquivo")
    -> __dirname: "diretorio da aplicação"
    -> para evitar erros por causa de rotas