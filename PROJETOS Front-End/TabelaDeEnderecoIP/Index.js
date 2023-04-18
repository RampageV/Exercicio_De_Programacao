function AdicionarInformacao() {

    var tabela = document.getElementById("informacao");
    var ipp = document.getElementById("TextInput").value
    var maskk = document.getElementById("TextMask").value;
    var versaoo = document.getElementById("TextVersao").value;

    var qtsLinhas = tabela.rows.length; // Contagem de linhas. 11
    var linha = tabela.insertRow(qtsLinhas); // Inserindo uma linha abaixo da quantidade total de linha. 


    var colunaIp = linha.insertCell(0); // Coluna do IP
    var colunaMask = linha.insertCell(1); // Coluna da Mask
    var colunaVersao = linha.insertCell(2); // Coluna da Versao
    var colunaExcluir = linha.insertCell(3); // Coluna do excluir

    colunaIp.classList.add("New-row");
    colunaIp.innerHTML = ipp;
    colunaMask.innerHTML = maskk;
    colunaVersao.innerHTML = versaoo;
    EspaçoVazio();
    excluir();
    editar();

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
        var editarbutton = document.createElement("span");
        editarbutton.classList.add("btnEditar");
        editarbutton.textContent = "Editar"

        colunaExcluir.appendChild(editarbutton)

        tabela.addEventListener("click", function (event) {

            var clickElemento = event.target;
            if (clickElemento.classList.contains("btnEditar")) {

                var ipLinha = document.querySelector('.New-row')
                console.log(ipLinha)
                var ipvalor = ipLinha.innerHTML;
                console.log(ipvalor)
                ipLinha.innerHTML = "<td id='nome_row'> <input type='text' id='ip_text' value=' " + ipvalor + "'> </td>";
                console.log(ipLinha)

                editar_salve()
            }
        });
    }

    function editar_salve() {

        document.querySelector(".btnEditar").style.display = "none";

        var editar_salve = document.createElement("span")
        editar_salve.classList.add("btnEditarSalve");
        editar_salve.textContent = "Salvar"

        colunaExcluir.appendChild(editar_salve)

        tabela.addEventListener("click", function (event) {

            var clickElemento = event.target
            if (clickElemento.classList.contains("btnEditarSalve")) {

                var valorDoSalve = document.getElementById("ip_text").value
                console.log(valorDoSalve)
                document.querySelector('.New-row').innerHTML = valorDoSalve;

                document.querySelector(".btnEditar").style.display = "block"
                document.querySelector(".btnEditarSalve").style.display = "none"
            }
        });
    }


    function excluir() {
        /*Criando botão excluir*/
        var botaoExcluir = document.createElement("span");
        botaoExcluir.classList.add("btnExcluir"); // Colocando a class btnExcluir dentro do botão span
        botaoExcluir.textContent = "Deletar"; // Colocando o nome do botão que vai aparecer para o usuário.

        colunaExcluir.appendChild(botaoExcluir); //Colocando o conteudo dentro da linha criado.

        // Exercução do botão excluir dentro da tabela
        tabela.addEventListener("click", function (event) {

            var clickElemento = event.target; // Pegando a target, quando for clicad
            if (clickElemento.classList.contains("btnExcluir")) { // Verificando se tem a classe btnExcluir.
                var celular = clickElemento.parentNode; // Pegando o elemento filho para conseguir acessar o elemento pai
                var linha = celular.parentNode; // Pegando elemento pai para excluir os elementos filhos que estão dentro dele. 
                linha.remove() // removendo
            }
        });


    }

}