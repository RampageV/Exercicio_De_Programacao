var arvores = new Array("Folha", "Cada de Arvore", "Fruto")

0 in arvores // true
1 in arvores // true
10 in arvores // false

"Folha" in arvores //False, não possui o indeci do nome "Folha"
"Length" in arvores // true, length é uma propriedade do Array



//Instanceof
var dia = new Date(2018,05,05)

if(dia instanceof Date){ // Instanceof verifica se é uma instância de uma classe.
    console.log("ok")
}