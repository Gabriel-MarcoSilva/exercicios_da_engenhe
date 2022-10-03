function calcular() {

    /*
        pega o numero e faz os calculos, e colocar um unnerhtml



    */

    var
        number = document.getElementById("number"),
        tabuada = document.getElementById("tabuada"),
        select = document.getElementById("select"),
        i, mult
    //op = document.getElementsByClassName("item")

    tabuada.innerHTML = " "
    select.innerHTML = " "

    for (i = 1; i <= 10; i++) {

        let op = document.createElement("option")
        op.value=`op${i}`
        mult = number.value * i
        tabuada.innerHTML += `&#10 ${number.value} x ${i} = ${mult};`
        op.text = `${number.value} x ${i} = ${mult}`
        select.appendChild(op)
    }
}