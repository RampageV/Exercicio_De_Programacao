num1 = 3;
num2 = 15;

somaP = 0;
multI = 1;

vetorP = new Array();
vetorI = new Array();

for (num1; num1 <= num2; num1++){
    if (num1 % 2 == 0){
        somaP += num1;
        vetorP.push(num1);
    }else{
        multI *= num1;
        vetorI.push(num1);
    }
}

console.log("A soma dos pares é: " + somaP);
console.log("A multiplicação dos ímpares: " + multI);

console.log("Elementos pares: ");
for (i=0; i< vetorP.length; i++){
    console.log(vetorP[i]);
}
console.log("Elementos ímpares: ");
for (i=0; i< vetorI.length; i++){
    console.log(vetorI[i]);
}