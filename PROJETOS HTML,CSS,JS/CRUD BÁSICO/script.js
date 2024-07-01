var dados = [];

// Evento para o botão Enter
document.addEventListener("keydown", function (e) {
    const btn = document.querySelector("#btnSalvar")

    if (e.key == "Enter") {
        btn.click();
    }
});

function ApagarRegistro(id) {
    let _confirm = confirm("Deseja realmente deletar esse registro ?");

    if (_confirm) {
        for (i = 0; i < dados.length; i++) {
            if (dados[i].ID == id) { //
                dados.splice(i, 1) // O I seria indece que gostaria de apagar e o 1 é a quantidade de elementos para ser apagado.
            }
        }
        PopulaTabela() //Depois de delatar o elemento, precisa reescrever a tabela novamente, só que dessa vez sem os dados que foi apagado. 
    }
}

const EditaRegistro = (id) => {
    $("#exampleModal").modal("show"); // Abre a modal

    /*Mostra os valores de todos os campos.*/
    dados.forEach(function (item) {
        if (item.ID == id) {
            $("hdID").val(item.ID)
            $("#txtNome").val(item.Nome)
            $("#txtSobrenome").val(item.Sobrenome)
            $("#txtDtNascimento").val(item.DtNascimento.substr(6, 4) + "-" + item.DtNascimento.substr(3, 2) + "-" + item.DtNascimento.substr(0, 2)) // O componente só compreende o formato americano da data. E atravez do substr, a gente vai troca as posições para o componente conseguir ler o formato brasileiro.
            $("#txtFormacao").val(item.Formacao)
        }
    });
}

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
                <td><button type="button" class="btn btn-primary" onclick="EditaRegistro(${item.ID})"><i class="fa-regular fa-pen-to-square"></i></button></td>
                <td><button type="button" class="btn btn-danger" onclick="ApagarRegistro(${item.ID})"><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button></td>
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

        let _id = $("#hdID").val()
        let Nome = $("#txtNome").val()
        let Sobrenome = $("#txtSobrenome").val()
        let DtNascimento = new Date($("#txtDtNascimento").val()).toLocaleDateString("pt-br", {
            timeZone: "UTC"
        }) // Passando o valor do input para o new date, pegando o valor é convertendo para o formato brasileiro: 03/05/2016, e usando timeZone: UTC para cancelar todo fuso horário.
        let Formacao = $("#txtFormacao").val()


        if (!_id || _id == "0") { // Se for nula, vazia ou igual a zero, vai da true. Significa que eu não tenho um id válido, então eu vou ter que cadastra um novo registro

            let registro = {}

            registro.Nome = Nome;
            registro.Sobrenome = Sobrenome;
            registro.DtNascimento = DtNascimento;
            registro.Formacao = Formacao;

            registro.ID = dados.length + 1;
            dados.push(registro)

        } else {
            dados.forEach(function (item) {
                if (item.ID == _id) {
                    item.Nome = Nome;
                    item.Sobrenome = Sobrenome;
                    item.DtNascimento = DtNascimento;
                    item.Formacao = Formacao;
                }

            })
        }

        alert("Registro Salvo com Sucesso !!")


        /* Apagando o campo !! */
        $("#hdID").val("0") // Sem ele, toda vez que for editar mais de um registro, vai ficar com o valor do registro anterior.
        $("#txtNome").val("")
        $("#txtSobrenome").val("")
        $("#txtDtNascimento").val("")
        $("#txtFormacao").val("")

        PopulaTabela()
    })

})