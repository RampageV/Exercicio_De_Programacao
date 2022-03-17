/* Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o NEW, 
são consideradas funções Factory */

function Pessoa(input){
    return{
        name:'Erick',
        Idade: 15,
       ...input
    }
}

const pessoa = Pessoa({Name:'Carlos',idade:20}); // Trabalhando com factory não possue NEW

console.log(pessoa)


