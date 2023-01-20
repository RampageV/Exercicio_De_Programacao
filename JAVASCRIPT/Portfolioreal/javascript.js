const palavrasubstituta = document.querySelector(".ChamandoNome")
const palavra = document.querySelectorAll(".palavra")
let barraMenuAberto = document.getElementById('BarraAmarela')

const sobre = () => {

    palavrasubstituta.innerHTML = palavra[0].innerHTML
    barraMenuAberto.style.display = "inline"; // Na classe css o display está como none, então colocando inline que é o padrão a barra vai aparacer
}

const portfolio = () => {
    palavrasubstituta.innerHTML = palavra[1].innerHTML
    barraMenuAberto.style.display = "inline";
}

const contato = () => {
    palavrasubstituta.innerHTML = palavra[2].innerHTML
    barraMenuAberto.style.display = "inline";
}

const currículo = () => {
    palavrasubstituta.innerHTML = palavra[3].innerHTML
    barraMenuAberto.style.display = "inline";
}