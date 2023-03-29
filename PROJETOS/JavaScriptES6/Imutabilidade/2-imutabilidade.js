const Estudantes = [{
        name: 'erick',
        idade: 7
    },
    {
        name: 'Pedro',
        idade: 10
    },
    {
        name: 'Gustava',
        idade: 15
    }

];

function IdadeAprovado(Lista) {
    return Lista.filter(Estudantes => Estudantes.idade >= 10)
}

console.log(IdadeAprovado(Estudantes));