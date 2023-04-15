function AdicionarInformacao() {

    var tabela = document.getElementById("informacao");
    var ipp = document.getElementById("TextInput").value;
    var maskk = document.getElementById("TextMask").value;
    var versaoo = document.getElementById("TextVersao").value;

    var qtsLinhas = tabela.rows.length; // Contagem de linhas. 11
    var linha = tabela.insertRow(qtsLinhas); // Inserindo uma linha abaixo da quantidade total de linha. 

    var colunaIp = linha.insertCell(0); // Coluna do IP
    var colunaMask = linha.insertCell(1); // Coluna da Mask
    var colunaVersao = linha.insertCell(2); // Coluna da Versao
    var colunaExcluir = linha.insertCell(3); // Coluna do excluir

    colunaIp.innerHTML = ipp;
    colunaMask.innerHTML = maskk;
    colunaVersao.innerHTML = versaoo;
    EspaçoVazio();

    editar();

    document.getElementById("TextInput").value = null;
    document.getElementById("TextMask").value = null;
    document.getElementById("TextVersao").value = null;


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
                editar_row(event);
                editar_salve(event);
            }
        });
    }

    
    function editar_row(event) {

        var ip = document.getElementById("TextInput" + event);

        var ip_info = ip.innerHTML;

        ip.innerHTML = "<input type='text' id='Ip_text" + event + "' value='" + ip_info + "'>";
    }


    function editar_salve(event){

        var ip_value = document.getElementById("Ip_text" + event).value

        document.getElementById("TextInput" + event).innerHTML = ip_value;
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