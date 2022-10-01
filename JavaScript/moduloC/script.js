//DOM

//deve ser aquilo document.getElementById e tals
    //isso mesmo

/*
    Dpcument Object Model
    conjunto de Objetos

*/

//arvore DOM - window - hierarquia
    /*
        window.location: localização do site, url
        window.document: documento atual
            -> HTML
                --> head
                --> body
        window.history: guarda asa rotas que foram accessada

    */

//selecionando:

    /*  
        Marca:
            -> document.getElementsBytagName('head')[number]
        Id:
            -> document.getElementById('id')
        Nome:
            -> document.getElementsByName('nome')[number]
        Classe:
            -> document.getElementsByClassName('classe')[number]
        Selector:
            -> document.querySelector('.classeName')[number]
            -> document.querySelectorAll('.classeName')[number]
            *pra classe usa o "." antes do nome da classe
            *pra id n precisa do "."
    */

//Eventos:

    /*
        onmouseover()/onmouseenter() -> quando passar com o mouse por cima 
        onmouseout() -> quandp sai da tag
        onmousedown() -> quando pressionar o mouse na tag
        onmouseup() -> depois de pressioanr o mouse na tag
        onclick() -> quando clica p mouse rápido na tag
        onmousemove() -> quando existir movimentação do mouse na tag
        

        podde usar também o addEventListener("mouseenter", funco), pra deixar o html mais limpo
            -> document....addEventListener("click", mudar)
    */

//function:
    /*só funcionam quando o evento ocorrer

        funcition teste(){
            //comandos
        }
    */


function move(){
    document.getElementsByTagName("h1")[0].innerHTML = "passou por cima"
}

function mudar(){
    document.getElementsByTagName("h1")[0].innerHTML = "clicou"
}

function sair(){
    document.getElementsByTagName("h1")[0].innerHTML = "saiu"
}

function soma(){

    var soma, num1, num2

    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value

    soma = Number(num1) + Number(num2)

    document.getElementById("resultado").innerHTML = soma
}