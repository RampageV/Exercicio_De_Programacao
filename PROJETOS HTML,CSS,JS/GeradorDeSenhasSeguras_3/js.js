let senhaElemento = document.querySelector("div.gerador-senha p")
const btnGerarSenha = document.querySelector("div.gerador-senha button")
const carateres = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "&", "$", "@", "0",
    "1", "2", "3", "4", "5", "6", "7", "8", "9"
];
let senha = '';

const geraSenha = () => {
    for (let i = 1; i <= 12; i++) {
        senha += carateres[Math.floor(Math.random() * carateres.length)]
    }
    senhaElemento.innerHTML = senha;

    senha = "";
}

const efeitoGerarSenha = 

btnGerarSenha.onclick = () => {
    geraSenha();
}