function MaiorIdade(vetor){
    idades = new Array();
    for (i=0; i < vetor.length; i++){
        if (vetor[i] > 18){
            idades.push(vetor[i]);
        }
        
    }
    return idades;
}
vetor = [12, 14, 24, 45, 60];
vetorI = MaiorIdade(vetor);

for (i=0; i < vetorI.length; i++){
    console.log(vetorI[i]);
}
