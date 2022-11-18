Modulos:
    cada arquivo guarda uma parte do cógigo
    se for uma função ela é colocada em um arquio separado e seu valor pe armazenado em uma variável:
        
        var soma = function(a,b){
            return a+b;
        }
    
    e ao final (para transformar em módulo), usa o module.exports = nomeVariável

    pra chamar todas as funções, deve chamá-las por um arquivo principal
        utilizando o require()
            -> função expecifica do node que chama o modulo
            -> chamado a partir de uma variavel que recebe tudo o que tem no arquivo com a função
            >> 
                var somaFunc = require("./soma)
                console.log(somaFunc(1,2))
