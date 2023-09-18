const nome = document.getElementById("nome");
const casa = document.getElementById("casa");
const manda = document.getElementById("Manda");

manda.addEventListener("click", () => {
    console.log(nome.value)
    casa.innerHTML = nome.value;
    casa.style.color ="#ffcbdb"
});