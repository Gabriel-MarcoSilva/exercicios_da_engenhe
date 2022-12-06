const app = require('./app');

const port = 4000;

app.listen(port, ()=>{
    console.log("servidor rodando na porta: ", port)
})