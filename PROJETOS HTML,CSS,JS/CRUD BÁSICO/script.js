var dados = []

function PopulaTabela() {

    if (Array.isArray(dados)) {
        localStorage.setItem("__dados__", JSON.stringify(dados)) // Depois que verifica se é um array mesmo, ele salva no localStorage.

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

$(function () {
    // EXECUTA AO CARREGAR DA TELA.
    dados = JSON.parse(localStorage.getItem("__dados__"))

    if (dados) {
        PopulaTabela();
    }

    $("#btnSalvar").click(function () { // event de click

        
        let Nome = $("#txtNome").val()
        let Sobrenome = $("#txtSobrenome").val()
        let DtNascimento = new Date($("#txtDtNascimento").val()).toLocaleDateString("pt-br", {
            timeZone: "UTC"
        }) // Passando o valor do input para o new date, pegando o valor é convertendo para o formato brasileiro: 03/05/2016, e usando timeZone: UTC para cancelar todo fuso horário.
        let Formacao = $("#txtFormacao").val()
        
        let registro = {}

        registro.Nome = Nome;
        registro.Sobrenome = Sobrenome;
        registro.DtNascimento = DtNascimento;
        registro.Formacao = Formacao;

        registro.ID = dados.length + 1;

        dados.push(registro) // Colocando o objeto registro do array dados.

        alert('Registro salvo com Sucesso !!')
        $("#exampleModal").modal("hide")// Depois que o alert aparecer, a modal vai ser fechada.

        /* Apagando o campo !! */
        $("#txtNome").val("")
        $("#txtSobrenome").val("")
        $("#txtDtNascimento").val("")
        $("#txtFormacao").val("")

        PopulaTabela() // Chamar de novo, para mais uma tabela seja criada.
    })



})