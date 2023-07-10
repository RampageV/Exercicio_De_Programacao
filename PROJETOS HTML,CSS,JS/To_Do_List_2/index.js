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
        
        <li class="task">
            <img src="img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
            <p>${item.tarefa}</p>
            <img src="img/trash.png" alt="deleta-tarefa" onclick="deletaItem(${index})">
        </li>  
        
        `
    });

    ListaCompleta.innerHTML = novaLi;
}

const concluirTarefa = (index) => {
    console.log(index)
}
const deletaItem = (index) => {
    minhaListaDeItens.splice(index, 1)
    mostraTarefa()
}

button.addEventListener('click', AdicionarNovaTarefa)