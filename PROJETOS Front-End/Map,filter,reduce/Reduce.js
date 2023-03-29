/*   
  1.Some todos os números de um array
  2.Crie uma função que recebe uma lista de preços e um número representando o saldo 
    disponível. Calcule qual será o saldo final após subtrair todos os preços da lista
    enviada. 

        */

function reduce(arr) { /*reduce busca reduzir um array. Ele iterará por cada elemento dessa 
    lista com o objetivo de ao final gerar um único valor*/
    return arr.reduce(function (antes, depois) {
        return antes + depois;
    })
}

const num = [1,2]

console.log(reduce(num))