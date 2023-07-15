const localStorageKey = 'to-do-list-gn'

function validateIfExistsNewTask() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById('input-new-task').value
    let existe = values.find(x => x.name == inputValue)
    return !existe ? false : true
}

function newtask() {

    let input = document.getElementById('input-new-task')
    input.style.border = '' // Começando com a borda vazia, se caso eu tentar adicionar algo e tiver vazio, a borda vai ficar vermelho.

    if (!input.value) {
        input.style.border = '1px solid red' // Colocando a borda vermelho se caso tiver vazio.
        alert('Digite algo, por favor !!')

    } else if (validateIfExistsNewTask()) { // Verifica se existe uma tarefa igual.
        alert('Não pode colocar duas tarefas iguais')

    } else {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        });
        localStorage.setItem(localStorageKey, JSON.stringify(values))
        showValues()
    }
    input.value = ''
}

function showValues() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for (let i = 0; i < values.length; i++) {
        list.innerHTML += `<li>${values[i]['name']} <button id="btn-ok" onclick='removeItem("${values[i]['name']}")' > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
      </svg> </button></li>`
    }
}

function removeItem(data) {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]") //Pegando os elementos do localstorage
    let index = values.findIndex(x => x.name == data)
    values.splice(index, 1)
    localStorage.setItem(localStorageKey, JSON.stringify(values))
    showValues()
}

showValues()