vetor = [20, 12, 1, 4, 5, 18, 15, 2];
x = -1;
y = 10;

if (x < 0 || y < 0 || x > vetor.length || y > vetor.length){
    console.log("O valor excede o tamanho do vetor!")
}else{
    soma = vetor[x-1] + vetor[y-1];
    console.log("A soma é: " + soma);
}
