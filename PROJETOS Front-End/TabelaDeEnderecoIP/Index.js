function AdicionarInformacao() {

    var tabela = document.getElementById("informacao");
    var ipp = document.getElementById("TextInput").value;
    var maskk = document.getElementById("TextMask").value;
    var versaoo = document.getElementById("TextVersao").value;

    var qtsLinhas = tabela.rows.length; // Contagem de linhas.
    var linha = tabela.insertRow(qtsLinhas); // Inserindo uma linha abaixo da quantidade total de linha. 


    var colunaIp = linha.insertCell(0); // Coluna do IP
    var colunaMask = linha.insertCell(1); // Coluna da Mask
    var colunaVersao = linha.insertCell(2); // Coluna da Versao
    var colunaExcluir = linha.insertCell(3); // Coluna do excluir

    // Criando o botão excluir
    var botaoExcluir = document.createElement("span");
    botaoExcluir.classList.add("btnExcluir"); // Colocando a class btnExcluir dentro do botão span
    botaoExcluir.textContent = "Deleta"; // Colocando o nome do botão que vai aparecer para o usuário.

    // Exercução do botão excluir dentro da tabela
    tabela.addEventListener("click", function (event) {
        var clickElemento = event.target; // Pegando a target, quando for clicado

        if (clickElemento.classList.contains("btnExcluir")) { // Verificando se tem a classe btnExcluir.
            var celular = clickElemento.parentNode; // Pegando o elemento filho para conseguir acessar o elemento pai
            var linha = celular.parentNode; // Pegando elemento pai para excluir os elementos filhos que estão dentro dele. 
            linha.remove() // removendo
        }
    });

    colunaIp.innerHTML = ipp;
    colunaMask.innerHTML = maskk;
    colunaVersao.innerHTML = versaoo;
    colunaExcluir.appendChild(botaoExcluir); //Colocando o conteudo dentro da linha criado.

    document.getElementById("TextInput").value = null;
    document.getElementById("TextMask").value = null;
    document.getElementById("TextVersao").value = null;

}



function remove() {

    var remove = document.createElement("p")
    remove.textContent = "x"

    console.log(remove)
}