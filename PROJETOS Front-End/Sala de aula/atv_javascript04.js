function calculaPotencia(vetor) {
    for (i = 0; i < vetor.length; i++) {
        vetor[i] = vetor[i] ** 2;
    }
    return vetor;
}
vetor1 = [5, 5, 35, 80, 50];
vetor = calculaPotencia(vetor1);

for (i = 0; i < vetor.length; i++) {
    console.log(vetor[i]);
}