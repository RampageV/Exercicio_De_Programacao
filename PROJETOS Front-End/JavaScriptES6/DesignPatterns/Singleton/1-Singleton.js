/*O objetivo desse pattern é criar uma única instância de uma função construtora e 
retorná-la toda vez em que for necessário utilizá-la. */

function Pessoa() {
    if (!Pessoa.instance) {
        Pessoa.instance = this
    }

    return Pessoa.instance;
}

const p = Pessoa.call({name:'Erick'});
const p2 = Pessoa.call({name:'Lucas'});

console.log(p)
console.log(p2)