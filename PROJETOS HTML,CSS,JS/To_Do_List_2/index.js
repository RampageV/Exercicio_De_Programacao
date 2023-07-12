const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const ListaCompleta = document.querySelector('.list-tasks');

let minhaListaDeItens = []

// Adicionando item no array
const AdicionarNovaTarefa = () => {
    minhaListaDeItens.push({ // Criando um objeto dentro do array.
        tarefa: input.value,
        concluida: false
    });
    mostraTarefa();

    input.value = ''
}

const mostraTarefa = () => {

    let novaLi = ''

    minhaListaDeItens.forEach((item, index) => {


        novaLi = novaLi + `
        
        <li class="task ${item.concluida && "done"}">
            <img src="img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
            <p>${item.tarefa}</p>
            <img src="img/trash.png" alt="deleta-tarefa" onclick="deletaItem(${index})">
        </li>  
        
        `
    });

    ListaCompleta.innerHTML = novaLi;
    LocalStorange()

}

const concluirTarefa = (index) => {
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida
    mostraTarefa()
}
const deletaItem = (index) => {
    minhaListaDeItens.splice(index, 1)
    mostraTarefa()
}

const LocalStorange = () => {

    // Convertendo em string e guardando no localstorange.
    localStorage.setItem('ListaDeArray', JSON.stringify(minhaListaDeItens))
}

const recarregarTarefas = () => {

    const tarefasDoLocalStorange = localStorage.getItem('ListaDeArray')

    if (tarefasDoLocalStorange) { // Se caso a lista no localstorage estiver vazio, não quero que ele adicione nada na "minhaListaDeItens"
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorange) // Convertendo de string para objeto.
    }
    mostraTarefa()
}

recarregarTarefas()
button.addEventListener('click', AdicionarNovaTarefa)