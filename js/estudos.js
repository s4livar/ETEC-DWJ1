// Varíaveis
numero = 9
var letra = 'E'
let palavra = "ETEC"
const PI = 3.14

let par = document.getElementById("msg");
let cliqueme = document.getElementById("clique-me");

// Funções
function exibirMensagem() {
  if (par.textContent!= "Mensagem") {
    par.innerText = "Mensagem"
  } else {
    par.innerHTML = "Seja bem-vindo"
  }
}

cliqueme.addEventListener("click", exibirMensagem)

function exibirNome(){
  par.innerHTML = nome 
}

const parametros = new URLSearchParams(window.location.search)
const nome = parametros.get("nomeInput")
if (nome != "" && nome != null) {
  exibirNome()
}

