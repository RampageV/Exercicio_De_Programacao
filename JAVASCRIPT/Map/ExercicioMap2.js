/* ATIVIDADE: Dado o array [0,2,3,6,9,8,5,8], retorn um outro array com valores unicos */

const MyArray =  [0,2,3,6,9,8,5,8,82,86,96,3,1]; // Array

function GetArray(arr){ // Função

    const myset = new Set(arr) // Criando o novo set passando o arr dentro do set

    return [myset] /* Para transformar o myset em um array, precisa ficar entre [] e os .. 
    pontos são para da continuidade para o que está dentro do array
    */
}

console.log(GetArray(MyArray))