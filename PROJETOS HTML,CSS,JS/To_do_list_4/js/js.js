//Seleção de elementos
const todoForm = document.querySelector('#todo-form')
const todoinput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#edit-input')
const cancelEditBtn = document.querySelector('#cancel-edit-btn')

// Funções
const saveTodo = (text) => {

    const todo = document.createElement('div');
    todo.classList.add('todo')

    const todoTitle = document.createElement('h3');
    todoList.innerHTML = text
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement('button')
    doneBtn.classList.add('finish-todo')
    doneBtn.innerHTML = ' <span class="material-symbols-outlined">done</span>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-todo')
    editBtn.innerHTML = '<span class="material-symbols-outlined">edit</span>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('remove-todo')
    deleteBtn.innerHTML = '<span class="material-symbols-outlined">close</span>'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)

    todoinput.value = "";
    todoinput.focus();
}


//Eventos
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputVale = todoinput.value;

    if (inputVale) {
        saveTodo(inputVale)
    }
});

document.addEventListener("click", (e) => {

    const targetEl = e.target;
    const parentEl = targetEl.closest("div");  

    if (targetEl.classList.contains('finish-todo')) {
        parentEl.classList.togggle("done"); // Se não tiver a classe ele coloca, se tiver, ele retira.
    }
})