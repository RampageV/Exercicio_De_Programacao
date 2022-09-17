const cellElements = document.querySelectorAll("[data-cell]")/* Para selecionar um atributo, precisa usar o [] */
const board = document.querySelector("[data-board]")

let isCircleTurn; 

/* ----LISTA DE COMBINAÇÕES */
const winningCombinations =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]
    [0,4,8],
    [2,4,6]
]

/* ---Começo do game ---- */
const startGamer = () =>{

    for (const cell of cellElements){/* Usando o for of para adicionar em para adicionar em cada celula um eventList */
    cell.addEventListener('click',handleclick,{ once:true })/* Esse once:true, vai fazer a gente clica somente uma vez em uma celula*/
}

isCircleTurn = false; 

board.classList.add("x")
}

/*--Função para adicionar class -- */
const placeMark = (cell,classToAdd) =>{
    cell.classList.add(classToAdd)
}

/*---Troca de turno --- */
const swapTurns = () =>{

    isCircleTurn = !isCircleTurn // Ele vai passar o turno, se for false que é o x, vai passar a ser true e vira a bola

    board.classList.remove("x") // Precisa remover, se não vai adicionar várias classe de x
    board.classList.remove("circulo")// Precisa remover, se não vai adicionar várias classe de circulo

    if(isCircleTurn){
        board.classList.add("circulo") // Como o jogo começa com false e é o x, precisa colocar o circulo no if, porque o circulo é logo em seguida, se colocar x, a pessoa vai clica e vai depois aparecer outro x.
    }else{
        board.classList.add("x")
    }
}

/*----COLOCANDO A MARCA----*/
const handleclick = (e) => { // O "e", vai ser o elemento da celula.

    const cell = e.target; // target ele aponto para o elemento da celula.
    const classToAdd = isCircleTurn ? "circulo" : "x" // Se for a vez do circulo a gente vai colocar, circulo, se não a gente coloca X
    
      placeMark(cell,classToAdd) // Adicionando a classe

      swapTurns() // Mudando o turno

}


startGamer()