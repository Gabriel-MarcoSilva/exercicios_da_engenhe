var display = document.getElementById("operacoes"),
    array = [], i, val1 = '0', val2 = '', val3 = '', pula = false, marca, cont = true, guarda = '';
display.innerHTML = val1

function calcular(props) {

    if (!pula) {
        if (val1 == '0') {
            val1 = String(props)
        } else {
            val1 += props
            cont = true
        }
    } else {
        val3 += props
    }

    display.innerHTML = val1 + " " + val2 + " " + val3

    console.log(val1, val2, val3)
    
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
}

function operacoes(props) {
    if (cont && val3 == '') {
        val2 = props
        display.innerHTML = val1 + " " + val2 + " " + val3
        pula = true
    }else{
        cont = false
    }
}