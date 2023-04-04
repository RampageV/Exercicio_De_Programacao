const enviarMensagem = document.getElementById("buttonEnviar")

enviarMensagem.addEventListener('click', () => {
    const nome = document.getElementById("nome").value;

    alert("Obrigado(a): " + nome +", "+"pela sua mensagem, entraremos em contato o mais breve possível.");
});