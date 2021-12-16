function potencia(numero) {
    for (i = 0; i < numero.length; i++) {
        numero[i] = numero[i] ** 2;
    }
    return numero;
}

vetor_entrada = [10, 20, 30, 40, 50];
vetor_entrada = potencia(vetor_entrada);

for (i = 0; i < vetor_entrada.length; i++) {
    console.log(vetor_entrada[i]);
}