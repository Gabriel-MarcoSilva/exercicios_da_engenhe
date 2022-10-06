function verificar() {

    var
        ini = document.getElementById("inicio"),
        fim = document.getElementById("fim"),
        passo = document.getElementById("passo"),
        i,
        res = document.getElementById("res"),
        concatena = ""

    if (Number(ini.value) == 0 || Number(fim.value) == 0 || Number(passo.value) == 0) {
        alert("[ERROR]: numéros inválidos")
    } else if (Number(ini.value) > Number(fim.value)) {
        alert("[ERROR]: final maior que inicial")
    } else {
        for (i = Number(ini.value); i < Number(fim.value) + 1; i += Number(passo.value)) {
            if (i == Number(ini.value)) {
                concatena = i
            } else {
                concatena = concatena + " 👉 " + i

            }
        }

        res.innerHTML = `${concatena}  👉 🏁`
    }

}