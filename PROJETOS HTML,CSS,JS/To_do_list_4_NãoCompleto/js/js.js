//Seleção de elementos
const todoForm = document.querySelector("#todo-form")
const todoinput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancel-edit-btn")

let oldInputValue;

// Funções
const saveTodo = (text) => {

    const todo = document.createElement("div");
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3");
    todoTitle.innerHTML = text;
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = ' <span class="material-symbols-outlined">done</span>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<span class="material-symbols-outlined">edit</span>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<span class="material-symbols-outlined">close</span>'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)

    todoinput.value = "";
    todoinput.focus();
}

const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
};

const updateTodo = (text) => {

    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo) => {

        let todoTitle = todo.querySelector("h3")

        if (todoTitle.innerHTML === oldInputValue) {
            todoTitle.innerHTML = text
        }
    });
}

//Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputVale = todoinput.value;

    if (inputVale) {
        saveTodo(inputVale)
    }
});

document.addEventListener("click", (e) => {

    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    //Verifica se o title existe. Caso não exista, ele cria.
    if (parentEl && parentEl.querySelector("h3")) {
      todoTitle = parentEl.querySelector("h3").innerHTML;
    }
    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done"); // Se não tiver a classe ele coloca, se tiver, ele retira.
    }

    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove()
    }
    if (targetEl.classList.contains("edit-todo")) {
        toggleForms()

        editInput.value = todoTitle
        oldInputValue = todoTitle
    }
});

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();
});

editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const editInputValue = editInput.value;

    if (editInputValue) {
        updateTodo(editInputValue)
    }
    toggleForms();
});