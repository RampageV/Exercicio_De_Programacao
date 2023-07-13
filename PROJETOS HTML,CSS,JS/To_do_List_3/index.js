const localStorageKey = 'to-do-list-gn'

const newtask = () => {

    let input = document.getElementById('input-new-task')


    if (!input.value) {
        alert('Digite algo, por favor !!')
    } else {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        });
        localStorage.setItem(localStorageKey, JSON.stringify(values))
        showValues()

    }

}

const showValues = () => {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = ""


    for (let i = 0; i < values.length; i++) {
        list.innerHTML += `<li>${values[i]['name']} <button id="btn-ok" onclick='removeItem("${values[i]['name']}")' > ok </button></li>`
    }
}

const removeItem = (data) => {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]") //Pegando os elementos do localstorage
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues()
}

showValues()