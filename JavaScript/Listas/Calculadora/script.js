var display = document.getElementById("operacoes"),
    val1 = '0',
    val2 = '',
    val3 = '',
    pula = false,
    marca,
    cont = true,
    guarda = '';

display.innerHTML = val1

function calcular(props) { //armazena os numeros como string, separados por variáveis

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

    //console.log(val1, val2, val3)

}

function igual() { // fnção que realiza as operações e retorna as variáveis para seus valores iniciais

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
    val1 = String(operacao)
    val2 = ''
    val3 = ''
    pula = false
}

function operacoes(props) { //para n ficar repetindo toda hora no display a operação
    if (cont && val3 == '') {
        val2 = props
        display.innerHTML = val1 + " " + val2
        pula = true
    } else {
        cont = false
    }
}