
/* Como declara Array */
let Arrray = ['String',1,true,['string1'],['string2']];
console.log(Arrray);

//Pode guardar varios tipos de dados, até mesmo outros array
console.log(Arrray);

// ForEach: E uma função que serve para você ver o item ('String',1) e qual seu index('String' index 0, 1 index 1, true index 2 etc)
//e por ultimo parametro ele mostra o array.
Arrray.forEach(function(item,index,array){
    console.log(item,index,array)
});

// Push: Ele serve para adicionar um novo dado dentro do array
Arrray.push('Casa');
console.log(Arrray);

//Pop: remove o ultimo array
Arrray.pop();
console.log(Arrray);

//Shift: Remove o primeiro array
Arrray.shift();
console.log(Arrray);

//unshift: Adiciona um item no inicio do Array
Arrray.unshift('Novo item no inicio');
console.log(Arrray)

// Indexof: Ele mostra o index de um item que está dentro no array
console.log(Arrray.indexOf(true));

// Splice: Remove um item pelo index, menos aqueles index que você escolheu
console.log(Arrray.splice(2,4));

//Slice: Ele retorna uma parte de um array existente
var NovoArray = Arrray.slice(2,4);
console.log(NovoArray);


/* ------------------------------------------OBJETOS E MANIPULAÇÕES DE OBJETOS------------------------------------ */

     var object = {String: 'String',
        Boolean: true,
        Number: 20,
        Array:['array123'],
        objecttt:{
            objectInterno:{
                casa:'MuitoGrande'
            }
            
    }
};

console.log(object.Array);
console.log(object.String);
console.log(object.objecttt);
console.log(object.objecttt.objectInterno);
console.log(object.objecttt.objectInterno.casa);

/* ------------------------------------------------------DESESTRUTURAÇÃO DE OBJETOS */

var {String,Boolean,Array} = object;
console.log(String,Boolean,Array);