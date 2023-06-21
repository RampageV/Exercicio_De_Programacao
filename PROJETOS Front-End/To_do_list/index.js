// Seleção de DOM
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// Funções
const addTodo = (event) => {
    event.preventDefault(); // Serve para não atualizar a página por esse está em um FORM de formulário.

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')

    const todoLi = document.createElement('li')
    todoLi.classList.add('todo-list')
    todoLi.innerHTML = todoInput.value;
    todoInput.value = "";

    todoDiv.appendChild(todoLi) // Adicionando li dentro da div

    const completedButtom = document.createElement('button')
    completedButtom.classList.add('completed-btn')
    completedButtom.innerHTML = '<i class="fa-solid fa-square-check"></i>'

    todoDiv.appendChild(completedButtom) // Adicionando completed button dentro da div

    const trashButtom = document.createElement('button')
    trashButtom.classList.add('trash-btn')
    trashButtom.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    todoDiv.appendChild(trashButtom) // Adicionando button delete dentro da div

    todoList.appendChild(todoDiv) // Adicinonando a tag Div dentro da lista de ul.

}

const deleteAndCheck = (e) => {

    const item = e.target;
    const todo = item.parentElement;

    if (item.classList[0] === 'trash-btn') { // Deleta
        todo.classList.add('fall');
        todo.addEventListener('transitioned', () => { // Efeito de transição quando algo é deletado
            todo.remove();
        });

    } else if (item.classList[0] == 'completed-btn') { // Completado
        todo.classList.toggle('completed');
    }

}

// Eventos de excutas
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteAndCheck)