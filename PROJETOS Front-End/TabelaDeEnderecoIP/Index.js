function AdicionarInformacao() {

    var tabela = document.getElementById("informacao");
    var ipp = document.getElementById("TextInput").value
    var maskk = document.getElementById("TextMask").value;
    var versaoo = document.getElementById("TextVersao").value;


    var qtsLinhas = tabela.rows.length; // Contagem de linhas. 11
    var linha = tabela.insertRow(qtsLinhas); // Inserindo uma linha abaixo da quantidade total de linha. 

    linha.setAttribute("class", "New-row" + qtsLinhas);


    var colunaIp = linha.insertCell(0); // Coluna do IP
    var colunaMask = linha.insertCell(1); // Coluna da Mask
    var colunaVersao = linha.insertCell(2); // Coluna da Versao
    var colunaExcluir = linha.insertCell(3); // Coluna do excluir


    colunaIp.classList.add("New-cell" + qtsLinhas);

    colunaIp.innerHTML = ipp;
    colunaMask.innerHTML = maskk;
    colunaVersao.innerHTML = versaoo;

    editar()
    salvar()
    EspaçoVazio()
    excluir()



    /*  -----------------------------------------------------------Funções------------------------------------------ */
    function EspaçoVazio() {

        if (colunaIp.innerHTML == '') {
            colunaIp.innerHTML = '-'
        }
        if (colunaMask.innerHTML == '') {
            colunaMask.innerHTML = '-'
        }
        if (colunaVersao.innerHTML == '') {
            colunaVersao.innerHTML = '-'
        }
    }


    function editar() {


        var editarbutton = document.createElement("span" + qtsLinhas);
        editarbutton.classList.add("btnEditar" + qtsLinhas);
        editarbutton.setAttribute("id", "btnEditar")
        editarbutton.textContent = "Editar"
        colunaExcluir.appendChild(editarbutton)

        tabela.addEventListener("click", function (event) {
            var clickElemento = event.target
            if (clickElemento.classList.contains("btnEditar" + qtsLinhas)) {

                var ipLinha = document.querySelector(".New-cell" + qtsLinhas)
                ipLinha.innerHTML = "<input type='number' id='ip_text' value=''> </td>";

                document.querySelector(".btnEditarSalve" + qtsLinhas).style.display = "inline"
                document.querySelector(".btnEditar" + qtsLinhas).style.display = "none"
            }

        });
        
    }

    function salvar() {


        var editar_salve = document.createElement("span" + qtsLinhas)
        editar_salve.classList.add("btnEditarSalve" + qtsLinhas);
        editar_salve.setAttribute("id", "editar_salve")
        editar_salve.textContent = "Salvar"
        colunaExcluir.appendChild(editar_salve)

        tabela.addEventListener("click", function (event) {

            var clickElemento = event.target
            if (clickElemento.classList.contains("btnEditarSalve" + qtsLinhas)) {

                var valorDoSalve = document.getElementById("ip_text").value;
                document.querySelector(".New-cell" + qtsLinhas).innerHTML = valorDoSalve

                document.querySelector(".btnEditarSalve" + qtsLinhas).style.display = "none"
                document.querySelector(".btnEditar" + qtsLinhas).style.display = "inline"
            }
        });

        document.querySelector(".btnEditarSalve" + qtsLinhas).style.display = "none"
    }

    function excluir() {

        var botaoExcluir = document.createElement("span" + qtsLinhas);
        botaoExcluir.classList.add("btnExcluir" + qtsLinhas); // Colocando a class btnExcluir dentro do botão span
        botaoExcluir.setAttribute("id", "btnExcluir")
        botaoExcluir.textContent = "Deletar"; // Colocando o nome do botão que vai aparecer para o usuário.
        colunaExcluir.appendChild(botaoExcluir); //Colocando o conteudo dentro da linha criado.

        // Exercução do botão excluir dentro da tabela
        tabela.addEventListener("click", function (event) {

            var clickElemento = event.target; // Pegando a target, quando for clicad
            if (clickElemento.classList.contains("btnExcluir" + qtsLinhas)) { // Verificando se tem a classe btnExcluir.
                var celular = clickElemento.parentNode; // Pegando o elemento filho para conseguir acessar o elemento pai
                var linha = celular.parentNode; // Pegando elemento pai para excluir os elementos filhos que estão dentro dele. 
                linha.remove()




            }
        });
    }
}