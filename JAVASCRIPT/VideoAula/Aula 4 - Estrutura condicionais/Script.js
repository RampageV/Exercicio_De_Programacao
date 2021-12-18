/* ------------------------------------IF,ELSE,ELSE IF----------------- */

var Jogador1 = 0;
var Jogador2 = 0;
var placar;

if (Jogador1 != -1) {
    if (Jogador1 > 0) {
        console.log('Jogador marco 1 ponto ');
    } else if (Jogador2 > 0) {
        console.log('Jogador número 2 ganho 1 ponto');
    } else {
        console.log('Nenhum jogador ganho ponto')
    }
}

/* -------------------------------------IF TERNÁRIO-------------------------------*/

//? represeta o if ternário, depois dele vem a primeiro condição, depois do ':', vem a segunda condição
Jogador1 != -1 && Jogador2 != -1 ? console.log('Jogadores valido') : console.log('Jogadores invalido')
if (Jogador1 != -1) {

    if (Jogador1 > 0 && Jogador2 == 0) {
        console.log('Jogador marco 1 ponto ');
        placar = Jogador1 > Jogador2;

    } else if (Jogador2 > 0 && Jogador1 == 0) {
        console.log('Jogador número 2 ganho 1 ponto');
        placar = Jogador2 > Jogador1;

    } else {
        console.log('Nenhum jogador ganho ponto')
    }
}

/* --------------------------------------------USANDO SWITCH/CASE------------------------------------  */
Jogador1 != -1 && Jogador2 != -1 ? console.log('Jogadores valido') : console.log('Jogadores invalido')
if (Jogador1 != -1) {

    if (Jogador1 > 0 && Jogador2 == 0) {
        console.log('Jogador marco 1 ponto ');
        placar = Jogador1 > Jogador2;

    } else if (Jogador2 > 0 && Jogador1 == 0) {
        console.log('Jogador número 2 ganho 1 ponto');
        placar = Jogador2 > Jogador1;

    } else {
        console.log('Nenhum jogador ganho ponto')
    }
}
switch (placar) {

    case placar = Jogador1 > Jogador2:
    console.log('Jogador 1 ganho do jogador 2');
    break;

    case placar = Jogador2 > Jogador1:
        console.log('Jogador 2 ganho do jogar 1');
        break;

        default: // Se os dois case não forem atendido, ira receber essa mensagem por default.
            console.log('Ninguém ganho !');
}

/* ------------------------------ for, for in, for of, while, do while --------------------------------------- */

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5', 'valor6'];

let object = {
  propriedade: 'casa',
  propriedade2: 'casa2',
  propriedade3: 'casa3'
}
// Usando for
for (let indici = 0; indici < array.length; indici++) {
    console.log(indici);
}

//Usando for in
for (let i in array) {
    console.log(i);
}

// Usando com objeto

for(let i in object){
console.log(i);
}

//Usando for of: Serve para imprimir o valor de cada indice.
for (let i of array) { 
    console.log(i);
}

//Usando for of com objetos.
for (let i of object.propriedade) {
    console.log(object);
}

// While 
var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}

// Do while

var a = 0;

do {

  a++;
  console.log(a)

} while (a < 10){

}