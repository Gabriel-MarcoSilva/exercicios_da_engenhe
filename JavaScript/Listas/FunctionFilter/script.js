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

/*
    const filteredNumbers = numbers.filter(function (number) {
        return number > 20;
    });
*/

var br = document.createElement("br"),
    content = document.getElementById("content"),
    denovo = true

function dados() {
    var info = dado.filter((data) => {
        return data.name == document.getElementById("name").value
    })

    console.log(info)
    content.innerHTML += "Idenificação: " + info[0].id
    content.appendChild(br)
    content.innerHTML += "Nome: " + info[0].name
    content.appendChild(br)
    content.innerHTML += "Idade: " + info[0].idade
    content.appendChild(br)
    content.innerHTML += "Data cadastro: " + info[0].created_at
    content.appendChild(br)
}

function mostrar() {

    if (denovo) {
        dados()
        denovo = false
        document.getElementById("button").value = "APAGAR"
    } else {
        document.getElementById('content').innerHTML = ' '
        document.getElementById("button").value = "MOSTRAR"
        denovo = true
    }
}