const palavrasubstituta = document.querySelector(".ChamandoNome")
const palavra = document.querySelectorAll(".palavra")

const sobre = () => {
    palavrasubstituta.innerHTML = palavra[0].innerHTML
}

const portfolio = () => {
    palavrasubstituta.innerHTML = palavra[1].innerHTML
}

const contato = () => {
    palavrasubstituta.innerHTML = palavra[2].innerHTML
}

const currículo = () => {
    palavrasubstituta.innerHTML = palavra[3].innerHTML
}