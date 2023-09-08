const mode = document.getElementById('mode_icon');
const form = document.getElementById('login_form');

mode.addEventListener('click', () => {

    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')
        form.classList.add('dark')
        return; // O return faz com que o if pare aqui. Não deixando cair na minha 11 e bugando o js.
    }
    mode.classList.remove('fa-sun')
    mode.classList.add('fa-moon')
    form.classList.remove('dark')
});