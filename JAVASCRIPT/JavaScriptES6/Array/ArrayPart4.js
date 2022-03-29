/* Some, retorna um booleano verificando se pelo menos
um item de um array satisfaz a condição */

const arr = [1, 2, 3, 5]
const arrsome = arr.some(value => value % 2 == 0)
console.log(arrsome)



/* Every, retorna um booleano verificando se todos os itens de um
array satisfazem a condição */

const arr1 = [1, 2, 3, 5]
const arrsome1 = arr.every(value => value % 2 == 0)
console.log(arrsome1)



/* Sort, ordena os elementos de um array de acordo
com a condição */

const arr2 = [1, 3, 2, 4, 5]
arr2.sort();
//[1,2,3,4,5]



/*Reverse, inverte os elementos de um array */

const arr3 = [1, 2, 3, 5]
arr3.reverse()
console.log(arr3)



/* Join, junta todos os elementos de um array, separados por um
delimitador e retorna uma string */

const arr4 = [1, 2, 3, 4, 5]
arr.join('_')
//"1-2-3-4-5"



/* reduce, retorna um novo tipo de dado iterando,
cada posição de um array */

const arr5 = [1, 2, 3, 4, 5]
arr5.reduce((total, value) => total += value, 0)
// 15