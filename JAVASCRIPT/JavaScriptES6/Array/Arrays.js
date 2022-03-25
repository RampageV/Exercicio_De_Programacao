/* Cria um array que pode colocar string e número */
const Numero1 = Array.of(1, 2, 'Erick')
console.log(Numero1)

/* Array criado com 3 espaço em vazio */
const numero2 = Array(3)
console.log(numero2)

/* Mesma coisa do array.of */
const numero3 = Array('Of', 'god', 5)
console.log(numero3)

/* Array.from cria uma nova instancia de array a partir do parametro, posso transforma os querySelectall em array */
//const divs = document.querySelectorAll('div')
//const ArrayDiv = Array.from(divs)

/* Remover do array ou adicionar */
const frutas = ['Abacaxi', 'maçã', 'Pera']
frutas.push('laranja')
console.log(frutas) // Adicionar no ultimo elemento do array
frutas.pop()
console.log(frutas) // Remove o ultimo elemento do array
frutas.unshift('laranja') // Adiciona no inicio do array
console.log(frutas)
frutas.shift() // Remove o primeiro do array
console.log(frutas)

const salgados = ['Pastel', 'coxinha', 'hamburguer']

/* O concat concatena dois array em um novo array */
const Alimentos = frutas.concat(salgados)
console.log(Alimentos)

const arr = [1, 2, 3, 4, 5]

arr.slice(0, 2)
//[1,2]
arr.slice(2)
//[3,4,5]
arr.slice(-1)
//[5]
arr.slice(-3)
//[3,4,5]

const arr2 = [1, 2, 3, 4, 5] // Splice pode remover como adicionar no array

arr2.splice(2)
//[3,4,5] Removel
console.log(arr2)
// [1,2]

arr2.splice(0, 0, 'Erick') // Primeiro parametro mostra a onde o nome Erick vai aparecer e segundo paramento mostra quantos do array vai ser apagado.
console.log(arr2)

const arrr = [1, 2, 5, 3]
arrr.forEach((index,value)=>{
console.log(`${index},${value}`)
});