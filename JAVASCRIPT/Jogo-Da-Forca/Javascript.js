let tentativas = 6; // Começa com 6, porque é o numero de tentativas que a pessoa vai ter.
let listaDinamica = []
let palavraSecretaSorteada;
let palabraSecretaCategoria;

const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria: "LUGARES",
    },
    palavra002 = {
        nome: "EQUADOR",
        categoria: "LUGARES",
    },
    palavra003 = {
        nome: "BRASIL",
        categoria: "LUGARES",
    },
    palavra004 = {
        nome: "ÔNIBUS",
        categoria: "TRANSPORTE",
    },
    palavra005 = {
        nome: "LANCHA",
        categoria: "TRANSPORTE",
    },
    palavra006 = {
        nome: "BICICLETA",
        categoria: "TRANSPORTE",
    },
    palavra007 = {
        nome: "LÁPIS",
        categoria: "OBJETOS",
    },
    palavra008 = {
        nome: "CANETA",
        categoria: "OBJETOS",
    },
    palavra009 = {
        nome: "CADERNO",
        categoria: "OBJETOS",
    },
    palavra010 = {
        nome: "HAMBURGUER",
        categoria: "ALIMENTOS",
    },
    palavra011 = {
        nome: "COXINHA",
        categoria: "ALIMENTOS",
    },
    palavra012 = {
        nome: "PASTEL",
        categoria: "ALIMENTOS",
    },
    palavra013 = {
        nome: "OVO",
        categoria: "ALIMENTOS",
    },
    palavra014 = {
        nome: "GATO",
        categoria: "ANIMAIS",
    },
    palavra015 = {
        nome: "CACHORRO",
        categoria: "ANIMAIS",
    },
    palavra016 = {
        nome: "TATU",
        categoria: "ANIMAIS",
    },
]


const criarPalavraSecreta = () => {

    const indexPalavra = parseInt(Math.random() * palavras.length) // Estamos criando uma variavel, e com o método random vai sortear aleatóriamente um numero, esse numero vai ser no máximo o numero de objeto que temos dentro do array palavras, usando o palavras.lengthe e depois converter ele em inteiro.
    palavraSecretaSorteada = palavras[indexPalavra].nome // Já que temos o index da palavra sorteada, por causa do indexPalavra, podemos agora pegar só o nome
    palabraSecretaCategoria = palavras[indexPalavra].categoria // Aqui estou pegando a categoria do item do sorteio
    console.log(indexPalavra, palavraSecretaSorteada, palabraSecretaCategoria)
};

const montarPalavraNaTela = () => {

    const categoria = document.getElementById("categoria")
    categoria.innerHTML = palabraSecretaCategoria

    const palavraTela = document.getElementById("palavra-secreta")
    palavraTela.innerHTML = ""

    for (i = 0; i < palavraSecretaSorteada.length; i++) // Pegando o tamanho da palavra sorteada
    {
        if (listaDinamica[i] == undefined) { // Caso a lista não tiver nada
            listaDinamica[i] = "&nbsp;" // Vai preencher com o caracter "&nbsp;", que representa o espaço em branco.
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>" // palavratela vai receber ela mesmo e mais uma class = "letra" que vai receber a listaDinamica[i] com toda a posição das letras e vai está tudo com espaço em branco, porém com o traço vermelho no bottom, para mostra quantas letra tem na palavra. 
        } else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

const verificaLetraEscolhida = (letra) => {

    document.getElementById("tecla-" + letra).disabled = true // Isso faz a tecla selecionada ficar desativada, se não colocar esse código, toda vez que clica na letra errada, ele vai completa o boneco

    if (tentativas > 0) {
        mudarStylerLetra("tecla-" + letra)
        comparaLista(letra)
        montarPalavraNaTela() // Aqui foi chamado para colocar as letras quando nos botões que estão em branco
    }
}

const mudarStylerLetra = (tecla) => {
    document.getElementById(tecla).style.background = "#800000"
    document.getElementById(tecla).style.color = "#F8F8FF"
}

const comparaLista = (letra) => {

    const pos = palavraSecretaSorteada.indexOf(letra) // Se a palavra existe dentro de palavraSecreta, eu quero que ele me der a posição

    if (pos < 0) { // Aqui ele vai verificar se existe a letra dentro da palavraSecreta. Todo array começa com index 0, se caso for menor que 0, signifca que não existe.

        tentativas-- // Se caso não exista a letra, a gente coloca o numero de tentativo--, signicando que a pessoa erro a letra.

        /*---Aparecer imagem---*/
        carregaImagemForca()

        if (tentativas == 0) { // Se o numero de tentativa for igual a zero, a gente chama a modal.

            abreModal("OPS !!!", "Você ERRO, a palvra secreta era " + palavraSecretaSorteada)
        }
        /*---Verificar se existe tentativas, caso não tenha, mostra mensagem---*/
    } else { // Se ele acerto a letra.
        for (i = 0; i < palavraSecretaSorteada.length; i++) { // Criando um for para percorre a palavra sorteada

            if (palavraSecretaSorteada[i] == letra) { // Se caso a letra for igual a letra escolhida 
                listaDinamica[i] = letra // O espaço que está em branco, vai receber a letra selecionada, caso tenha essa letra dentro de palavraSecreta.
            }
        }
    }

    let vitoria = true

    for (i = 0; i < palavraSecretaSorteada.length; i++) {

        if (palavraSecretaSorteada[i] != listaDinamica[i]) { // Ele verifica se a palavrasecreta é igual ao listaDinamica
            vitoria = false
        }
    }

    if (vitoria == true) {

        abreModal("Parabéns !!!", "Você acerto a palavra secreta que era, " + palavraSecretaSorteada)
        tentativas = 0 // Já que ganhor, não precisa de mais tentativas. 
    }
}
/* Carregamento das imagens */
const carregaImagemForca = () => {

    switch (tentativas) {

        case 5:
            document.getElementById("imagem").style.background = "url(img/forca01.png)"
            break;

        case 4:
            document.getElementById("imagem").style.background = "url(img/forca02.png)"
            break;

        case 3:
            document.getElementById("imagem").style.background = "url(img/forca03.png)"
            break;

        case 2:
            document.getElementById("imagem").style.background = "url(img/forca04.png)"
            break

        case 1:
            document.getElementById("imagem").style.background = "url(img/forca05.png)"
            break

        case 0:
            document.getElementById("imagem").style.background = "url(img/forca06.png)"
            break;
    }


}

const abreModal = (titulo, mensagem) => {

    let modalTitulo = document.getElementById("exampleModalLabel")
    modalTitulo.innerText = titulo

    let modalBody = document.getElementById("modalBody")
    modalBody.innerHTML = mensagem

    $("#myModal").modal({
        show: true
    })
}

/* Reinicia quando clica no controle */
let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function () {
    location.reload(); // Reiniciar a página
});

/* Reiniciar depois que fecha o alert() */
let btnFechar = document.getElementById("btnFecha");
btnFechar.addEventListener("click", function () {
    location.reload();
});

criarPalavraSecreta()
montarPalavraNaTela()