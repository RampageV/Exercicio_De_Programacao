var dados = []

function PopulaTabela() {

    if (Array.isArray(dados)) {

        $("#tblDados tbody").html("") // Limpando as linhas da minha tabela para escrever novas 

        dados.forEach(function (item) {

            //Template String
            $("#tblDados tbody").append(`<tr>
                <td>${item.ID}</td>
                <td>${item.Nome}</td>
                <td>${item.Sobrenome}</td>
                <td>${item.DtNascimento}</td>
                <td>${item.Formacao}</td>
            </tr>`);
        });
    }
}


$(function(){
     // EXECUTA AO CARREGAR DA TELA.
     dados = JSON.parse(localStorage.getItem("__dados__"))

     if (dados) {
 PopulaTabela();
     }
})