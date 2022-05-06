/* Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de 
um objeto criado por você, e depois sem ele. */

function MapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

const num = [5, 6, 9, 9, 9, 9, 8, 7, 1, 2];

console.log(MapSemThis(num))// Com o map se cria um novo array

console.log(num) // O array original se manteve intacto