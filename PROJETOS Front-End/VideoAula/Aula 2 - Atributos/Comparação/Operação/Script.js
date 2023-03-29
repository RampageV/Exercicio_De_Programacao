/* ------------------------------------  TIPOS DE VARIAVEIS -------------------------------------- */


/*Tipo boolean*/
var VoUf = false;
console.log(typeof VoUf);


/*Tipo númerico*/
var NumeroQualquer = 1;
console.log(typeof NumeroQualquer);


/*Tipo String*/
var nome = "Erick Pessoa";
console.log(typeof nome);


/*--------------------------------------DIFERENÇA DE VAR, LET E CONST --------------------------------*/


/* Uso do Var, usado em um escopo global */
var UsoDoVar = 10;
console.log(UsoDoVar);


/*Uso do let, usado em bloco de código fechado como em function */
function UsoDOLet() {
    let casa = "Erick";
    console.log(casa);
}
UsoDOLet();


/*O const ele não mudar, se foi atribuido algo nesse, vai se manter constante, resultado: 20*/
const Amigo = 20;
console.log(Amigo);


/*--------------------------------------ATRIBUIÇÃO/COMPARAÇÃO/COMPARAÇÃO IDENTICA-------------------------------------------------*/

/*Atribuição*/
var casa10 = 11;

/* Comparação */
var comparacao = '0' == 0;
console.log(comparacao) // true

/* Comparação identica */
var casa15 = '0' === 0;
console.log(casa15); // FALSE, comparação identica compara também os tipos das variaveis, uma é numerico e outro é string.


/* ------------------------------------ OPERAÇÃO ARITMÉTICO --------------------------------------- */

/* SOMA */
var soma = 1+1;
console.log(soma);

/* SUBTRAÇÃO */
var subtracao = 1-1;
console.log(subtracao);

/* DIVISÃO */
var divisao = 5/2;
console.log(divisao);

/* MULTIPLICAÇÃO */
var multiplicacao = 5*2;
console.log(multiplicacao);

/* POTENÇA */
var potença = 2 ** 10;
console.log(potença);

/* RESTO DA DIVISÃO */
var mesa = 5 % 2;
console.log(mesa);




