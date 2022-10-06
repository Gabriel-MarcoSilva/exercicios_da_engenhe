/*
    array:
        let num = [ 0, 1, 2]
        mudar valores:
            num[index] = valor
        acrescentar valores:
            num.push(valor)
        comprimento:
            num.length 
        ordenar crescente
            num.sort()
        procurar um termo:
            num.indexOf(valor)

    objetos: 
        let amigo = {nome: 'jose', sexo: 'm', peso: 85.4, functions}

*/

function carregar(){
    var p = document.getElementById("vetor"),
        vet = [2,3,5,6,4,1],
        br = document.createElement("br")

    p.innerHTML = "vetor:"

    p.innerHTML += vet

    p.appendChild(br)
    p.innerHTML += "vetor por for:"

    for(let i = 0; i < vet.length; i++){
        p.innerHTML += vet[i] 
    }

    p.appendChild(br)

    vet.sort()

    p.innerHTML += "vetor ordenado: "

    for(let i in vet){ //para cada posição em vet execute, mas só funciona pra arrays e objects
        p.innerHTML += vet[i]
    }


    //objetos 
    p.appendChild(br)
    p.innerHTML += "objeto: "
    p.appendChild(br)

    let amigo = {nome: "nome", sexo: "m", peso: 85.4, engordar(k){ p.innerHTML += "engordou"; this.peso += k}}
    amigo.engordar(2)
}