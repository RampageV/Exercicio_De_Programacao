var dados = []


const PopulaTabela = () => {

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


$(function () { // jQuery

    //Exercuta ao carregar a tela.
    dados = JSON.parse(localStorage.getItem("__dados__")) // Convertendo para objeto.

    if (dados) { // Se diferente de vazio, vai me retornar True.
        PopulaTabela()
    }

});