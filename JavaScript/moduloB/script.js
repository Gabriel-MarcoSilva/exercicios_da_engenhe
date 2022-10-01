//window.alert("minha prmeira mensagem")
//window.confirm("está gostando? ")

function nome(){
    var nome = window.prompt("qual seu nome?")
    document.getElementById("name").innerHTML = nome;
    //ou
    //document.write(`o nome:   ${nome}  tem  ${nome.length}  letras`)
}

//typeof
    /*
        retorna o tipo da variavel
    */

//parse
    /*
        transforma o tipo de uma variável para outro
        parseInt, parseFloat, parseBoolean, String
        se quiser colocar Number.parseInt
    */

//toFixed(n) -> serve pra coocar as casas decimais


//operadores

    /*
        Aritméticos: (retuen: number)
            + soma
            - subtração
            * multiplicação
            / divisao
            % resto
            ** exponenciação
            
            -> Importância (precedência)
                ()
                **
                *, /, %
                +, - 
            
        Lógicos: (return: boolean)
            && e
            || ou
            !  negação
        
            -> Importância:
                !
                &&
                ||
        Relacionais: (return:  boolean)
            =  atriuição
            == igual
            != diferente
            >  maior
            <  menor
            >= maior ou igual
            <= menor ou igual

        Ternário: 
            ? :
            teste ? true : false
    */