function changeMode() { // Função criada para chamar outras funções
    changeClasse();
    changeText();
}

function changeClasse() {
    button.classList.toggle(ClassDarkMode) // Toggle, ele tira a classe se já existir, mas se não existir ele coloca.
    h1.classList.toggle(ClassDarkMode)
    body.classList.toggle(ClassDarkMode)
    footer.classList.toggle(ClassDarkMode)
}

function changeText() {
    if (body.classList.contains(ClassDarkMode)) {
        button.innerHTML = 'Light Modo'
        h1.innerHTML = 'Dark Modo On'
        return;
    } else {
        button.innerHTML = 'Dark Modo'
        h1.innerHTML = 'Light Modo On'
    }
}

const ClassDarkMode = 'dark-mode';
const button = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0];
/* Todo get Element devolve um array, como
a gente quer o body especificamente, então a gente precisa começa do 0 */
const footer = document.getElementsByTagName('footer')[0]


button.addEventListener('click', changeMode)