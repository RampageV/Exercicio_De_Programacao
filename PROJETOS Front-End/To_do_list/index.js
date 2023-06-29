// Seleção de DOM
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')



// Funções
const addTodo = (event) => {
    event.preventDefault(); // Serve para não atualizar a página por esse está em um FORM de formulário.

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')

    const todoLi = document.createElement('li')
    todoLi.classList.add('todo-list')
    todoLi.innerText = todoInput.value;

    todoDiv.appendChild(todoLi) // Adicionando li dentro da div


    const completedButtom = document.createElement('button')
    completedButtom.innerHTML = '<i class="fa-solid fa-square-check"></i>'
    completedButtom.classList.add('complete-btn');
    todoDiv.appendChild(completedButtom) // Adicionando completed button dentro da div

    saveLocalTodos(todoInput.value)

    const trashButtom = document.createElement('button')
    trashButtom.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    trashButtom.classList.add('trash-btn')
    todoDiv.appendChild(trashButtom) // Adicionando button delete dentro da div

    todoList.appendChild(todoDiv) // Adicinonando a tag Div dentro da lista de ul.

    todoInput.value = "";
}

const deleteAndCheck = (e) => {

    const item = e.target;
    const todo = item.parentElement;

    if (item.classList[0] === 'trash-btn') { // Deleta
        todo.classList.add('fall');
        todo.addEventListener('transitioned', () => { // Efeito de transição quando algo é deletado
            todo.remove();
        });
    }

    if (item.classList[0] === 'complete-btn') { // Completado
        todo.classList.toggle('completed');
    }

}

const filterTodo = (e) => {
    const todos = todoList.childNodes;

    todos.forEach((todo) => {

        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex'
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}

function saveLocalTodos(Todo) {

    let todos;

    // Verifica se o localstorage está vazio, se tiver ele cria um array
    if (localStorage.getItem('todos') == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos')) // Se caso não tiver vazio, ele vai converter os tudo que está na lista para um formato json.
    }

    todos.push(Todo); // Estou empurrando todas as informações que vem do meu usuario, a minha variavel "todos"

    localStorage.setItem('todoss', JSON.stringify(todos)) // Aqui a gente seta as informações no banco de dados em formato de JSON no local storange. 
}

// Eventos de excutas
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteAndCheck)
filterOption.addEventListener('click', filterTodo)