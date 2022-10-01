/*
    <img src="https://th.bing.com/th/id/OIP.kk2qzbuvb_QNbG0gCm2UygHaE8?w=278&h=185&c=7&r=0&o=5&pid=1.7" alt="foto-tarde"/>
    <img src="https://th.bing.com/th/id/OIP.yfRxAEImYlKR9eFPj8QSbwHaEo?w=294&h=184&c=7&r=0&o=5&pid=1.7" alt="foto-noite"/>

*/


function carregar(){
    var 
        msg = window.document.getElementById("message"),
        img = document.getElementById("image"),
        data = new Date(),
        hore = data.getHours(),
        body = document.getElementsByTagName("body")[0]

    msg.innerHTML = `agora são: ${hore} horas`

    if(hore >= 0 && hore <= 12){
        img.src = "https://th.bing.com/th/id/OIP.OrXbEru8Ug4ejtdMe4A7zgHaFF?w=266&h=183&c=7&r=0&o=5&pid=1.7"
        img.alt="paisagem-manha"
        body.style.background = "#e2cd9f"
    }else if(hore > 12 && hore <= 18){
        img.src = "https://th.bing.com/th/id/OIP.kk2qzbuvb_QNbG0gCm2UygHaE8?w=278&h=185&c=7&r=0&o=5&pid=1.7"
        img.alt="paisagem-tarde"
        body.style.background = "#b9846f"
    }else{
        img.src = "https://th.bing.com/th/id/OIP.yfRxAEImYlKR9eFPj8QSbwHaEo?w=294&h=184&c=7&r=0&o=5&pid=1.7"
        img.alt="paisagem-noite"
        body.style.background = "#515154"
    }
}