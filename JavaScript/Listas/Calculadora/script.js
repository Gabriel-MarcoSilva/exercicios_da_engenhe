var display = document.getElementById("operacoes"),
    val1 = '0',
    val2 = '',
    val3 = '',
    pula = false,
    marca,
    guarda = '',
    operacao;

display.innerHTML = val1

function calcular(props) { //armazena os numeros como string, separados por variáveis

    if (!pula) {
        if (val1 == '0' || val1 == String(operacao)) {
            val1 = String(props)
        }
        else {
            val1 += props
        }
    } else {
        val3 += props
    }

    display.innerHTML = val1 + " " + val2 + " " + val3

    //console.log(val1, val2, val3)

}

function igual() { // fnção que realiza as operações e retorna as variáveis para seus valores iniciais

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
    } else {
        operacao = val1
    }

    document.getElementById('resultado').innerHTML = operacao

    if (operacao == Infinity) {
        operacao = 0
    }

    val1 = String(operacao)
    val2 = ''
    val3 = ''
    pula = false

}

function operacoes(props) { //para n ficar repetindo toda hora no display a operação
    if (val3 != '') {
        igual()
    }
    
    val2 = props
    pula = true
    display.innerHTML = val1 + " " + val2
}

function reset() {
    val1 = '0'
    display.innerHTML = val1
    document.getElementById('resultado').innerHTML = ""
}

document.querySelector('body').addEventListener('keydown', function (event) {

    if (event.keyCode == '13') {
        igual()
    }
    if (event.keyCode == '97'|| event.keyCode == '49' ) {
        calcular('1')
    }
    if (event.keyCode == '98'|| event.keyCode == '50') {
        calcular('2')
    }
    if (event.keyCode == '99'|| event.keyCode ==  '51') {
        calcular('3')
    }
    if (event.keyCode == '100'|| event.keyCode == '52') {
        calcular('4')
    }
    if (event.keyCode == '101'|| event.keyCode == '53') {
        calcular('5')
    }
    if (event.keyCode == '102'|| event.keyCode == '54') {
        calcular('6')
    }
    if (event.keyCode == '103'|| event.keyCode == '55') {
        calcular('7')
    }
    if (event.keyCode == '104'|| event.keyCode == '56') {
        calcular('8')
    }
    if (event.keyCode == '105'|| event.keyCode == '57') {
        calcular('9')
    }
    if (event.keyCode == '96'|| event.keyCode == '48' ) {
        calcular('0')
    }
    if (event.keyCode == '107') {
        operacoes('+')
    }
    if (event.keyCode == '109') {
        operacoes('-')
    }
    if (event.keyCode == '106') {
        operacoes('x')
    }
    if (event.keyCode == '111') {
        operacoes('/')
    }
    if (event.keyCode == '82') {
        reset()
    }

    display.innerHTML = val1 + " " + val2 + " " + val3

})