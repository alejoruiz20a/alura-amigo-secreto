// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let listaAmigos = document.getElementById("listaAmigos")
let amigo = document.getElementById("amigo")

function agregarAmigo() {
    if (amigo.value !== "") {
        amigos.push(amigo.value)
        listarAmigos()
        amigo.value = ""
        console.log(amigos)
    } else {
        alert("DEBES INGRESAR UN NOMBRE PARA AÑADIR A TU AMIGO!")
    }
}

function listarAmigos() {
    let li = document.createElement("li");
    li.innerHTML = amigo.value
    listaAmigos.append(li)
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let resultado = document.getElementById("resultado")
        while (resultado.firstChild) {
            resultado.removeChild(resultado.firstChild)
        }
        let amigoSecreto = amigos[Math.floor(Math.random()*amigos.length)]
        resultado.append(document.createElement("li").innerHTML = amigoSecreto)
    } else {
        alert("DEBES AÑADIR AMIGOS A LA LISTA PARA PODER SORTEAR!")
    }
}