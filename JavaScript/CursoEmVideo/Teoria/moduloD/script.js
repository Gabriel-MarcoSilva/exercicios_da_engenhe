/*

if(condições){
    comandos
}

switch(variável){
    case 0:
        condição
        break
    default:
        condição
        break
    
}


*/

function calcular() {
    var
        vel = document.getElementById("vel"),
        content = document.getElementById("content");

    if (Number(vel.value) <= 30) {
        content.innerHTML = "você está abaixo da velocidade"
    }
    else if (Number(vel.value) > 30 && Number(vel.value) < 70) {
        content.innerHTML = "você está na velocidade permitida"
    } else {
        content.innerHTML = "você está acima da velocidade permitida"
    }
}

function viajar() {
    var
        pais = document.getElementById("pais"),
        destiny = document.getElementById("destino")

    if(pais.value.length == 0){
        destiny.innerHTML = "obigatório escrever"
    }else{
        if (pais.value == "Brasil" || pais.value == "brasil") {
            destiny.innerHTML = "Você é brasileiro!!"
            return true;
    
        } else {
            destiny.innerHTML = "Você é estrangeiro"
            return false;
        }
    }
}

/* Aula 02 */

function votar() {
    var
        idade = document.getElementById("idade"),
        voto = document.getElementById("voto")
        brasil = viajar()

    if(Number(idade.value) < 16 || !brasil ){
        voto.innerHTML = "não pode votar"
    }else{
        if(Number(idade.value) >= 16 && Number(idade.value) < 18){
            voto.innerHTML = "voto opcional"
        }else{
            voto.innerHTML = "voto obrigatório"
        }
    }

}