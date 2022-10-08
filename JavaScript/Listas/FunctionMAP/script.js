const dado = [
    {
    id:"1",
    name:"Bartolomeu Santos",
    idade:36,
    created_at:"2022_03_1"
    
    },
    {
    id:"2",
    name:"Maria Mesote",
    idade:45,
    created_at:"2022_02_1"
    
    },
    {
    id:"1",
    name:"Juliana Silva",
    idade:36,
    created_at:"2018_03_1"
    
    }
]

var br = document.createElement("br");
    denovo = true

function inicio(props) {
    dado.map((data) =>{
        console.log(`${data.name} tem ${data.idade} anos `)

        if(props == 1){
            return(
                document.getElementById("content").innerHTML += `${data.name} tem ${data.idade} anos`,
                document.getElementById('content').appendChild(br)
            )
        }
    })
}

function mostrar(){
    if(denovo){
        inicio(1)
        denovo = false
        document.getElementById("button").value = "APAGAR"
    }else{
        document.getElementById('content').innerHTML = ' '
        document.getElementById("button").value = "MOSTRAR"
        denovo = true

    }
}

/*Map (javascript): dado o array de objetos faça com que seja mostrado no 
console.log apenas o nome e idade dos usuários.*/