/*Uma função decorator recebe uma outra função como parâmetro e estende 
o seu comportamento sem modificá-la explicitamente */

let login = false

function call(fn) {
    return !!login && fn();
}

function sum(a, b) {
    return a + b;
}

console.log(call(() => sum(5, 5))) // False
login = true
console.log(call(() => sum(5, 5)))// 10
