/* Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de 
um objeto criado por você, e depois sem ele. */
const maça = {
    value: 2,
}

const banana = {
    value: 3,
}

function mapComThis(arr, thiss) {
    return arr.map(function (item) { // O item aqui seria num
        return item * this.value; // this.value seria dos objetos banana ou maça
    }, thiss);
}

const num = [1, 2, 3]

console.log('Maça', mapComThis(num, maça)) // Passando os objetos que vai fazer multiplicação uns com os outros.
console.log('banana', mapComThis(num, banana))