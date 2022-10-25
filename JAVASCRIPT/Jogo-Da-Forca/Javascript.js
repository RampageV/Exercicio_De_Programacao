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

const verificaLetraEscolhida = (letra) =>{

}

criarPalavraSecreta()
montarPalavraNaTela()