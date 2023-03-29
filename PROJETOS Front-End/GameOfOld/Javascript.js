const cellElements = document.querySelectorAll("[data-cell]") /* Para selecionar um atributo, precisa usar o [] */
const board = document.querySelector("[data-board]")
const winnningMessageTextElement = document.querySelector("[data-winning-message-text]")
const winningMessage = document.querySelector("[data-winning-message]")
const WinningMessageButton = document.querySelector("[data-reset-buttom]")

let isCircleTurn;

/* ----LISTA DE COMBINAÇÕES */
const winningCombinations = [ // Todas as combinações de vitória
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
/* ---Começo do game ---- */
const startGamer = () => {

    isCircleTurn = false;

    for (const cell of cellElements) { //Usando o for of para adicionar em para adicionar em cada celula um eventList
        cell.classList.remove("x")
        cell.classList.remove("circulo")
        cell.addEventListener('click', handleclick, {
            once: true //Esse once:true, vai fazer a gente clica somente uma vez em uma celula
        })

        setBoardHoverClass()
        winningMessage.classList.remove("show-winning-message") // Aqui é para tira a tela de vitória toda vez que reiniciar.
    }

}

const endGame = (isDraw) => {

    if (isDraw) { // Se for um empate
        winnningMessageTextElement.innerText = 'Empate!'
    } else {
        winnningMessageTextElement.innerText = isCircleTurn ? "Círculo Venceu !!" : " X Venceu  !!"
    }

    winningMessage.classList.add("show-winning-message")
}

/*------Qual jogador está fazendo a jogada atual----- */
const checkForWin = (currentPlay) => { // Se todas as etapas forem true, então aquele jogado x ou circulo, ganho.
    return winningCombinations.some((combination) => { // some() testa se pelo menos um elemento na matriz passa no teste implementado pela função fornecida, no caso a função combination, se passar, ela retorna true, se não false
        return combination.every((index) => { //every() testa se todos os elementos no array passam no teste implementado pela função fornecida
            return cellElements[index].classList.contains(currentPlay) // Aqui ele verifica se a celula no index, contains o currentPlay(Jogada atual), se tiver toda a combinação, exemplo: [0,1,2], ele devolve true.
        });
    });
}

const checkForDraw = () => {
    return [...cellElements].every((cell) => { // Se todas as cell tiverem x ou ciruclo, é que houve um imparte.
       return cell.classList.contains('x') || cell.classList.contains('circulo')
    })
}

/*--Função para adicionar class -- */
const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd)
}


const setBoardHoverClass = () => {
    board.classList.remove("x") // Precisa remover, se não vai adicionar várias classe de x
    board.classList.remove("circulo") // Precisa remover, se não vai adicionar várias classe de circulo

    if (isCircleTurn) {
        board.classList.add("circulo") // Como o jogo começa com false e é o x, precisa colocar o circulo no if, porque o circulo é logo em seguida, se colocar x, a pessoa vai clica e vai depois aparecer outro x.
    } else {
        board.classList.add("x")
    }
}

/*---Troca de turno --- */
const swapTurns = () => {

    isCircleTurn = !isCircleTurn // Ele vai passar o turno, se for false que é o x, vai passar a ser true e vira a bola
    setBoardHoverClass()
}

/*----COLOCANDO A MARCA----*/
const handleclick = (e) => { // O "e", vai ser o elemento da celula.

    const cell = e.target; // target ele aponto para o elemento da celula.
    const classToAdd = isCircleTurn ? "circulo" : "x" // Se for a vez do circulo a gente vai colocar, circulo, se não a gente coloca X

    placeMark(cell, classToAdd) // Adicionando a classe


    /*----VERIFICAÇÃO POR VITÓRIA---- */
    const isWin = checkForWin(classToAdd) // Aqui a gente coloca o classToAdd, que ele vai coloca a classe x ou circulo, e com a função checkForWin, vai dizer se é true.
    const isDraw = checkForDraw();

    if (isWin) {

        endGame(false) // Se colocar true, vai ficar dando imparte o tempo todo

    } else if (isDraw) {

        endGame(true) // Se for true, vai da imparte

    } else {

        swapTurns() // Mudando o turno
    }

}


startGamer();

/* ------Reniciando o jogo novamente-------- */
WinningMessageButton.addEventListener("click", startGamer)