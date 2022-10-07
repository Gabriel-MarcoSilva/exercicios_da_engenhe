var display = document.getElementById("operacoes"),
    array = [], i, val1 = '', val2 = '', val3 = '', pula = false, marca, cont = true, guarda = '';

function calcular(props) {

    if (display.innerHTML[0] == 0) {
        if (props.value != '+' || props.value != '-' || props.value != 'x' || props.value != '/') {
            display.innerHTML = props
            val1 = String(props)
            pula = false
        }
    } else {

        if (!pula) {
            val1 += props
            cont = true
        } else {
            val3 += props
        }   

        display.innerHTML = val1 + " " + val2 + " " + val3

        console.log(val1, val2, val3)
    }

}

function igual() {

    var operacao;

    if (val2 == '+') {
        operacao = Number(val1) + Number(val3)
    }
    else if (val2 == '-') {
        operacao = Number(val1) - Number(val3)
    }
    else if (val2 == 'x') {
        operacao = Number(val1) * Number(val3)
    }
    else if (val2 == '/') {
        operacao = Number(val1) / Number(val3)
    }

    document.getElementById('resultado').innerHTML = operacao
    val1 = ''
    val2 = ''
    val3 = ''
    pula = false
    cont = false
}

function operacoes(props) {
    if(display.innerHTML[0] != 0 && cont){
        val2 = props
        display.innerHTML = val1 + " " + val2
        pula = true
        cont = false
    }
}