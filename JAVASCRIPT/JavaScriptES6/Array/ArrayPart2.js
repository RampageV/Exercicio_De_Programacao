
/* Interação de cada item com array */
const arrr = [10, 25, 53, 13]
arrr.forEach((value,index)=>{
console.log(`${value} - ${index}`)
});

console.log("  ")

/* Retorna um novo array, de mesmo tamanho, iterando cada item de um array */
const arr = [10,2,3,6,9]
console.log(arr.map(value => value *2))


console.log("  ")

/* Retorna um novo array com todos os elementos de um sub-array
concatenados de forma recursiva de acordo com a profundidade */

const idade = [10,10,9,8,6,[10,2,3,6,[52,25,25,[10,69,98,[10,20]]]]];

console.log(idade.flat(4)) /* com o numero vai se juntando os array que estão dentro um do outro */

console.log("  ")

/* Retorna um novo array assim como a função map e executa um flat
de profundidade 1 */

const arr3 = [1,2,3,4,5]

arr3.flatMap(value => [[value * 2]])
// [2],[4],[6],[8],[10]

/* key, retonra um array iterator que contém as chaves para
 cada elemento do array */

 const arrkey = [1,2,3,4]

const arriterator = arrkey.keys();

arriterator.next();
//{value: 0 ,done: false}
arriterator.next();
//{value: 1 ,done: false}
arriterator.next();
//{value: 2 ,done: false}
arriterator.next();
//{value: 3 ,done: true}



