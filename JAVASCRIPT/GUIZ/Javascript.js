let pergunta = {
    titulo: "Gato",
    alternativas: ['Cat', 'Gat', 'Gate', 'Dog'],
    correto: 1
}

function mostraquestao(q) {
    let titleDiv = document.getElementById('titulo');
    titleDiv.textContent = q.titulo; // Ele vai pegar o titulo da pergunta e substituir

    let alts = document.querySelectorAll('.alternativa');
    alts.forEach(function (element, index) { // ForEach é igual ao um for ou map, dentro dele a gente passa um element e index dele, mas aqui no caso, estou passando uma função para cada elemento do ALTS
        element.textContent = q.alternativas[index] // O element aqui está pegando o primeiro elemento do array e colocando com o textContent as alternativas
        element.addEventListener('click',function () {
            if (index == q.correto) {
                console.log("Acerto !!")
            } else {
                console.log("Erro !!")
            }
        });
    });
}

mostraquestao(pergunta)