function button() {
    document.getElementById("tatuagem").style.color = "#F7DDB2" // Mudo a cor da tatuagem grande
    document.getElementById("Casa").innerHTML = "Fala pessoal" // Mudo o nome de casa grande para "Fala pessoal"
}

function rederecionar(){
    window.open("https://www.google.com/")/* Essa função serve para chamar o site em outra aba */
}

function rederecionar2(){
window.location.href = "https://maplestory.nexon.net/"; /* Aqui faz o mesmo que o Window.open, porém ele
abre na mesma aba */
}

function troca(){
    alert("Passo o mouse, né") /* Quando passar o mouse por cima vai aparecer essa mensagem
    pode ser usar o onmouseout pra quando quiser tira o mouse de cima */
}

function load(){
    alert("Pagina carregada"); /* Pode ser colocando no body, se colocado no body, vai carregar a função antes da 
    página */
}

function Change(elemento){
console.log(elemento.value) /*Quando ele mudar o valor, você sempre vai conseguir pegar o valor que ele
está mudando */
}