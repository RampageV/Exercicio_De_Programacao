let perguntas = [{
        titulo: "Gato",
        alternativas: ['Cat', 'Gat', 'Gate', 'Dog'],
        correto: 0
    },
    {
        titulo: "Fire",
        alternativas: ['Água', 'Luz', 'Ar', 'Fogo'],
        correto: 3
    },
    {
        titulo: "Bird",
        alternativas: ['Cachorro', 'Urubu', 'Pombo', 'Passaro'],
        correto: 3
    }
];

let app = {
    start: function () {
        AtualPergunta = 0
        totalPontos = 0

        let alts = document.querySelectorAll('.alternativa')
        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                this.checaResposta(index); // O this se refere ao app, pode colocar app ou this que vai da no mesmo. Mas por boas práticas, coloque o this.
            })
        });

        this.mostraquestao(perguntas[AtualPergunta])
    },



    mostraquestao: function (q) {
        qtas = q
        // Mostra o titulo
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo; // Ele vai pegar o titulo da pergunta e substituir

        // Mostra as alternativas
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element, index) => { // ForEach é igual ao um for ou map, dentro dele a gente passa um element e index dele, mas aqui no caso, estou passando uma função para cada elemento do ALTS
            element.textContent = q.alternativas[index] // O element aqui está pegando o primeiro elemento do array e colocando com o textContent as alternativas
        });
    },


    ProximaPerg: function () { // Vai fazer ir para próxima pergunta do array
        AtualPergunta++
        if (AtualPergunta == perguntas.length) { // O array de perguntas vai de 0 a 2, depois da pergunta do array 2. ele volta para 0
            AtualPergunta = 0
        }
    },


    checaResposta: function (user) {
        if (qtas.correto == user) {
            console.log("Certa !!")
            totalPontos++
            this.mostraReposta();
        } else {
            console.log("Errada !!")
            this.mostraReposta();
        }

        this.atualizarPontos();
        this.ProximaPerg();
        this.mostraquestao(perguntas[AtualPergunta])

    },

    atualizarPontos: function () {
        let scoreDiv = document.getElementById('pontos')
        scoreDiv.textContent = `Sua pontuação é: ${totalPontos}`
    },

    mostraReposta: function (correto) {
        let resultDiv = document.getElementById('result')
        let result = ''
        //Formatar com a mensagem exibida
        if (correto) {
            result = 'Resposta correta !!';
        } else {
            // Obtendo  a questão atual
            let pergunta = perguntas[AtualPergunta]
            //Obtendo  o indece da resposta correta da questão atual
            let indexx = pergunta.correto
            // Obtendo o texto  da resposta  correta  da questão atual
            let cText = pegunta.alternativas[indexx]
            result = `Incorreto !! Resposta correta: ${cText}`
        }

        resultDiv.textcontent = result;
    }
}


app.start();