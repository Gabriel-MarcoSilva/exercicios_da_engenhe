/*
links:

mulheres:
    adulta: https://th.bing.com/th/id/OIP.3EPmdNLTukEWtHZpzC1bAwHaE8?w=278&h=185&c=7&r=0&o=5&pid=1.7
    jovem: https://th.bing.com/th/id/OIP.CzhpbDgYUsF_FwR5wz9pRAHaE7?w=185&h=123&c=7&r=0&o=5&pid=1.7
    criança: https://th.bing.com/th/id/OIP.Chr-OLdehFXNoN5AQAJryAHaE7?w=253&h=180&c=7&r=0&o=5&pid=1.7
    idosa: https://th.bing.com/th/id/OIP.79yfmpOFOSrwG8QJ-8kh_QHaDO?w=350&h=152&c=7&r=0&o=5&pid=1.7

homens:
    aadulto: https://th.bing.com/th/id/OIP.PUSma7aaVY3fnA4pIEezkAHaF6?w=185&h=148&c=7&r=0&o=5&pid=1.7
    jovem: https://th.bing.com/th/id/OIP.P4eaDmVpjDlhAEQF1jGvVwHaFZ?w=272&h=198&c=7&r=0&o=5&pid=1.7
    criança: https://th.bing.com/th/id/OIP.Y2YtH9aLNUIeGrmU4w3CCgHaE7?w=255&h=180&c=7&r=0&o=5&pid=1.7
    idoso: https://th.bing.com/th/id/OIP.hPJFBudamkjOSo_gr_LyCQHaE8?w=236&h=180&c=7&r=0&o=5&pid=1.7

*/


function verificar() {
    var
        data = new Date(),
        ano = data.getFullYear(),
        fano = document.getElementById("anoNas"),
        sexo = document.getElementsByName("sex")
    res = document.querySelector("div#resultado"),
        genero = "",
        img = document.createElement('img');


    img.setAttribute('id', 'foto')

    if (fano.value == 0 || fano.value > ano) {
        alert("[ERRO] Verifique se  o ano foi digitado corretamente")
    } else {

        var idade = Number(ano) - Number(fano.value)

        if (sexo[0].checked) {
            genero = "masculino"
            if (idade < 10) {
                img.setAttribute("src", "https://th.bing.com/th/id/OIP.Y2YtH9aLNUIeGrmU4w3CCgHaE7?w=255&h=180&c=7&r=0&o=5&pid=1.7")
            } else if (idade < 30) {
                img.setAttribute("src", "https://th.bing.com/th/id/OIP.P4eaDmVpjDlhAEQF1jGvVwHaFZ?w=272&h=198&c=7&r=0&o=5&pid=1.7")
            } else if (idade < 50) {
                img.setAttribute("src", "https://th.bing.com/th/id/OIP.PUSma7aaVY3fnA4pIEezkAHaF6?w=185&h=148&c=7&r=0&o=5&pid=1.7")
            } else {
                img.setAttribute("src", "https://th.bing.com/th/id/OIP.hPJFBudamkjOSo_gr_LyCQHaE8?w=236&h=180&c=7&r=0&o=5&pid=1.7")
            }
        } else {
            genero = "feminino"
            if (idade < 10) {
                img.setAttribute("src", "https://th.bing.com/th/id/OIP.Chr-OLdehFXNoN5AQAJryAHaE7?w=253&h=180&c=7&r=0&o=5&pid=1.7")
            } else if (idade < 30) {
                img.setAttribute("src", "https://th.bing.com/th/id/OIP.CzhpbDgYUsF_FwR5wz9pRAHaE7?w=185&h=123&c=7&r=0&o=5&pid=1.7")
            } else if (idade < 50) {
                img.setAttribute("src", "https://th.bing.com/th/id/OIP.3EPmdNLTukEWtHZpzC1bAwHaE8?w=278&h=185&c=7&r=0&o=5&pid=1.7")
            } else {
                img.setAttribute("src", "https://th.bing.com/th/id/OIP.79yfmpOFOSrwG8QJ-8kh_QHaDO?w=350&h=152&c=7&r=0&o=5&pid=1.7")
            }
        }
        res.style.align = "center"
        res.innerHTML = `Detectamos um ${genero} de ${idade} anos`
        res.appendChild(img)

    }
}