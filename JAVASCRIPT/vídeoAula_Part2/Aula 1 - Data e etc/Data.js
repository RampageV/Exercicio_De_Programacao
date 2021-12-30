var data = new Date();

console.log(data)
console.log(data.getDay())
console.log(data.getHours())
console.log(data.getMinutes())
console.log(data.getSeconds())

function SetReplace(frase,nome,TrocaDoNome){

    return frase.replace(nome,TrocaDoNome) 
}

alert(SetReplace("Vai Japão","Japão","Brasil"))// Aqui ele vai fazer a troca do nome Japão por Brasil na frase "Vai Japão"

