var
    input = document.getElementById("number"),
    select = document.getElementById("numCad"),
    container = document.getElementById("container"),
    array = [], num = 0


function lista(i, lista){
    if(lista.indexOf(Number(i)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar() {
    if (input.value == '' || !(Number(input.value) > 0 && Number(input.value) <= 100) ) {
        alert("coloque um numero que respeite o intervalo de 0 a 100")
    } else {num++
        container.innerHTML = ""
        if(!lista(input.value, array)){
            array.push(Number(input.value))
            let op = document.createElement("option")
            op.value=`op${num}`
            op.text = `${input.value}`
            select.appendChild(op)
        }else{
            alert("numero repetido")
        }
        input.value = ""
        input.focus()
    }
}

function finalizar(){
    var soma = 0, media = 0, maior = -1, menor=101;

    if(!select.length == 0){
        for (let index = 0; index < array.length; index++) {
            soma += array[index]
            media = soma/array.length
            if(maior < array[index]){
                maior = array[index]
            }
            if(menor > array[index]){
                menor = array[index]
            }
        }
    
        container.innerHTML = `
            Foram cadastrados: ${array.length} numero (s)<br/>
            O maior entre eles é o: ${maior} <br/>
            O menor entre eles é o: ${menor} <br/>
            A soma dos numeros é: ${soma} <br/>
            A média dos numeros é: ${media} <br/>
        `
    }else{
        alert("cadastre numeros primeiro")
    }
}