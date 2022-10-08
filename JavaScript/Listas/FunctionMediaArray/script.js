function inicio() {
    const dado = [
        {
            id: "1",
            name: "Bartolomeu Santos",
            idade: 36,
            created_at: "2022_03_1"

        },
        {
            id: "2",
            name: "Maria Mesote",
            idade: 45,
            created_at: "2022_02_1"

        },
        {
            id: "1",
            name: "Juliana Silva",
            idade: 36,
            created_at: "2018_03_1"

        }
    ]

    media(dado)
}


function media(array) {

    var soma = 0, media = 0, cont = 0;

    array.map((data) => {
        soma += data.idade
        cont++
    })

    media = soma / cont

    console.log(`foram cadastradas ${cont} pessoas, e a média de suas idades é: ${media} anos`)

    document.getElementById("content").innerHTML = `foram cadastradas ${cont} pessoas, e a média de suas idades é: ${media} anos`
}

function mostrar() {
    if (document.getElementById("content").style.display == "block") {
        document.getElementById("content").style.display = "none"
        document.getElementById("button").value = "MOSTRAR"

    } else {
        document.getElementById("button").value = "APAGAR"
        document.getElementById("content").style.display = "block"

    }
}


/*
    4 – Usando o conhecimento da questão 2 e 3 faça: criar uma função 
   que recebe o tipo da operação e um array “dado”, e retorne a média
   das idades dos usuários e quantos usuários estão cadastrados.
*/
