/*

2.Crie uma função que recebe uma lista de preços e um número representando o saldo 
disponível. Calcule qual será o saldo final após subtrair todos os preços da lista
enviada. 

*/

const list = [

    {
        name: 'Pão',
        preco: 5
    },
    {
        name: 'Cachorro quente',
        preco: 5
    },
    {
        name: 'Biscoito',
        preco: 5
    }
]

const SaldoDisponível = 100;


function CalcularSaldo(SaldoDisponível, list) {
    return list.reduce(function (antes, depois) { // O reduce vai ser em relação a lista
        return antes - depois.preco /* Cada vez que passa uma rodada, ele vai dimnir o valor.
         Não esqueça de colocar esse atributo "preço", ela é o atributo que vai indicar para fazer a diminuição*/
    }, SaldoDisponível) /* Aqui você colocar o inicio se caso quiser, como a gent quer diminuir as
    o valor do saldo menos as compras, a gente coloca o saltodisponivel*/
}

console.log(CalcularSaldo(SaldoDisponível,list)) // Aqui você passa as varias que você quer que faça o calculo.