/*
                           Atividade: validação de erros por tipo

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado 
como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof */

function ValidarErro(arr, num) { //Crie uma função que recebe um array e um número
    try {
        if (!arr && !num) throw new ReferenceError("Enviar parametro");// Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError

        if (typeof arr !== 'object') throw new TypeError("Diferente de object") // Se o array não for do tipo 'object', lance um erro do tipo TypeError

        if (typeof num !== 'number') throw new TypeError("Diferente de number")// Se o número não for do tipo 'number', lance um erro do tipo TypeError

        if (arr.lenght !== num) throw new RangeError("Tamanho Diferente") //Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError

        return arr;

    } catch (e) { //Utilize a declaração try...catch
        if (e instanceof ReferenceError) { //Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
            console.log("Erro de ReferenceError")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Erro de TypeError")
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log("Erro de RangeError")
            console.log(e.message)
        } else {
            console.log("Ocorreu um erro inesperado")
        }
    }

}

console.log(ValidarErro([],5))