var
    pedido = document.getElementById("pedido"),
    fatias

function size() {
    var
        tamanho = document.getElementById("tamanho"),
        button = document.createElement("input")
    if (tamanho.value == "pequena") {
        fatias = 6
    } else if (tamanho.value == "media") {
        fatias = 8
    } else if (tamanho.value == "grande") {
        fatias = 10
    } else if (tamanho.value == "familia") {
        fatias = 12
    } else {
        fatias = 0
    }

    if (fatias == 0) {
        pedido.innerHTML = "não temos esse tamanho"
    } else {
        pedido.innerHTML = `pizza tamanho ${tamanho.value} saindo...`
    }
}


function comer(){
    var con
    do {
        pedido.innerHTML = `sobraram ${fatias}`
        fatias--;
        con = prompt("quer comer outra")
    } while(con == 'sim')
}
