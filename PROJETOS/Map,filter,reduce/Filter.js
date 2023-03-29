/* Filtre e retorne todos os números pares de um array. */


function FiltorPar(arr) {
    return arr.filter(function (item) {
        return item % 2 == 0;
    });
}

const Num = [5, 6, 9, 8, 10, 20, 30, 3, 5, 7]

console.log(FiltorPar(Num))