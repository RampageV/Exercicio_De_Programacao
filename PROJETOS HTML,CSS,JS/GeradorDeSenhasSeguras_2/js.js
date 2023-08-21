let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let SizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!";
let NovaSenha = "";


SizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    SizePassword.innerHTML = this.value;
}

const generatePassword = () => {
alert("Tudo ok")
}