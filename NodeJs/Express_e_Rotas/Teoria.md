é um framework usado para o back end, orientado a rotas

minimalista e facil de utilizar
    -> fazem poucos impulsos simples

    cmd: (na pasta onde vai usar)
        npm install express --save

app cria uma instância, cria uma copia inteira do framework
    ou seja, tudo que for utilizar do express pode ser usado pela variavel app

ultima linha do código deve ser a linha app.listen()

a maioria das funções do express tem uma função callback

ROTAS:

    chama a app e coloca: .get, .post, .delete, ou .put; e coloca a rota que deve aparecer

Parâmetros:
    valores inamicos que o usuário pode colocar
    parametros sao colocados nas rotas antecedendo o :
        ex: /ola/:nome