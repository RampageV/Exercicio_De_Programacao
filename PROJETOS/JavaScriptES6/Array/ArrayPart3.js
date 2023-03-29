/* Values, retorn um array iterator que contém os valore
para cada elemento do array */

const arr = [1,2,3,4]

const arriTerator = arr.values();

arriTerator.next();
//{value: 1 ,done: false}
arriTerator.next();
//{value: 2 ,done: false}
arriTerator.next();
//{value: 3 ,done: false}
arriTerator.next();
//{value: 4 ,done: true}

/* Entries, retorna um array iterator que contém os pares chaves/valor 
para cada elemento do array*/

const arr2 = [1,2,3,4]

const arriTerator2 = arr2.entries();

arriTerator2.next();
//{value:[0,1], dona: false}
arriTerator2.next();
//{value:[1,2], dona: false}
arriTerator2.next();
//{value:[2,3], dona: false}
arriTerator2.next();
//{value:[3,4], dona: true}

/* Find. Retorna o primeiro item de um array
que satisfaz a condição */

const arr3 = [1,2,3,4,5]

const arrayfind = arr.find(value => value > 2)

console.log(arrayfind)
// 3, ele vai retorna o primeiro item maior que 2


/* Retorna o índece do primeiro item de um 
array que satisfaz a condição */

const arr4 = [1,2,3,4,5]

const arrayfind2 = arr.findIndex(value => value > 2)

console.log(arrayfind2)

/* Filter, retorna um novo array com todos os elementos
que satisfazem a condição */

const arr5 = [1,2,3,4,5]

const arrayfind3 = arr.filter(value => value > 2)

console.log(arrayfind3)


/* indexOf, retorna o primeiro indece em que um
elemento pode ser encontrado no array */

const arr6 = [1,2,3,4,5]

const arrayfind6 = arr.indexOf(3)

console.log(arrayfind6)

/* lastIndexOf, retorna o ultimo indece em que
um elemento pode se encontrado no array */

const arr7 = [1,2,2,2,4,5]

const arrayfind7 = arr7.lastIndexOf(2)
console.log(arrayfind7)



/*Incluides, retorna um booleano verificando se determinado elemento existe
no array */

const arr8 = [1,2,3,4,5,6]

const existee  = arr8.includes(6)
console.log(existee)

