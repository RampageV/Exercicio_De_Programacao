let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let SizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!";
let NovaSenha = '';


SizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    SizePassword.innerHTML = this.value;
}

const generatePassword = () => {

    let pass = ""; // Aqui é onde vai ficar a senha

    for (let i = 0, numTotalCharset = charset.length; i < sliderElement.value; ++i) {

        // CharAt retorna o caractere em uma localização específica em uma String;
        // Math.floor retorna um numero inteiro
        // Math.random retorna um número randomico vezes o numero total do charset.  
        pass += charset.charAt(Math.floor(Math.random() * numTotalCharset));
    }

    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    NovaSenha = pass;
}

function copyPassword() {
    alert("Senha copiada com sucesso!")
    console.log(NovaSenha)
    navigator.clipboard.writeText(NovaSenha);
}

