function AdicionarInformacao() {

    var tabela = document.getElementById("informacao");
    var ipp = document.getElementById("TextInput").value
    var maskk = document.getElementById("TextMask").value;
    var versaoo = document.getElementById("TextVersao").value;


    var qtsLinhas = (tabela.rows.length); // Contagem de linhas. 11
    var linha = tabela.insertRow(qtsLinhas); // Inserindo uma linha abaixo da quantidade total de linha.

    var colunaIp = linha.insertCell(0); // Coluna do IP
    var colunaMask = linha.insertCell(1); // Coluna da Mask
    var colunaVersao = linha.insertCell(2); // Coluna da Versao
    var colunaEditarESalve = linha.insertCell(3)
    var colunaExcluir = linha.insertCell(4); // Coluna do excluir

    colunaIp.innerHTML = ipp;
    colunaMask.innerHTML = maskk;
    colunaVersao.innerHTML = versaoo;

    colunaIp.classList.add("New-cell-ip" + qtsLinhas);
    colunaMask.classList.add("New-cell-mask" + qtsLinhas);
    colunaVersao.classList.add("New-cell-versao" + qtsLinhas)



    CorLinha()
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
        editarbutton.setAttribute("class", "fa-solid fa-pen")
        editarbutton.classList.add("btnEditar" + qtsLinhas);
        colunaEditarESalve.appendChild(editarbutton)

        tabela.addEventListener("click", function (event) {
            var clickElemento = event.target
            if (clickElemento.classList.contains("btnEditar" + qtsLinhas)) {

                /* ip */
                var ipLinha = document.querySelector(".New-cell-ip" + qtsLinhas)
                var ValorLinhaIP = ipLinha.innerHTML;            
                ipLinha.innerHTML = "<input type='number' id='ip_text" + qtsLinhas + "' value='" + ValorLinhaIP + "'> </td>";

                /* Mask */
                var masklinha = document.querySelector(".New-cell-mask" + qtsLinhas)
                var ValorLinhaMask = masklinha;
                masklinha.innerHTML = "<input type='number' id='mask_text" + qtsLinhas + "' value='" + ValorLinhaMask + "'> </td>";

                /* Versão*/
                var versaoLinha = document.querySelector(".New-cell-versao" + qtsLinhas)
                var ValorVersao = versaoLinha.innerHTML;
                versaoLinha.innerHTML = "<input type='number' id='versao_text" + qtsLinhas + "' value='" + ValorVersao + "'> </td>";

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
        colunaEditarESalve.appendChild(editar_salve)

        tabela.addEventListener("click", function (event) {

            var clickElemento = event.target
            if (clickElemento.classList.contains("btnEditarSalve" + qtsLinhas)) {

                /*ip salvo */
                var valorDoSalveIp = document.querySelector("#ip_text" + qtsLinhas).value;
                document.querySelector(".New-cell-ip" + qtsLinhas).innerHTML = valorDoSalveIp;

                /*mask salvo */
                var valorDosalveMask = document.getElementById("mask_text" + qtsLinhas).value;
                document.querySelector(".New-cell-mask" + qtsLinhas).innerHTML = valorDosalveMask;

                /* Versão*/
                var valorDoSalveVersao = document.getElementById("versao_text" + qtsLinhas).value;
                document.querySelector(".New-cell-versao" + qtsLinhas).innerHTML = valorDoSalveVersao;

                document.querySelector(".btnEditarSalve" + qtsLinhas).style.display = "none"
                document.querySelector(".btnEditar" + qtsLinhas).style.display = "inline"
            }
        });

        document.querySelector(".btnEditarSalve" + qtsLinhas).style.display = "none"
    }

    function excluir() {
        var botaoExcluir = document.createElement("span");
        botaoExcluir.setAttribute("class", "fa-solid fa-x")
        botaoExcluir.classList.add("btnExcluir"); // Colocando a class btnExcluir dentro do botão span
        colunaExcluir.appendChild(botaoExcluir); //Colocando o conteudo dentro da linha criado.

        tabela.addEventListener("click", function (event) {

            var clickElemento = event.target; // Pegando a target, quando for clicad
            if (clickElemento.classList.contains("btnExcluir")) { // Verificando se tem a classe btnExcluir.
                var celular = clickElemento.parentNode; // Pegando o elemento filho para conseguir acessar o elemento pai
                var linha = celular.parentNode; // Pegando elemento pai para excluir os elementos filhos que estão dentro dele. 
                linha.remove()
            }
        });
    }

    function CorLinha() {

        if (qtsLinhas % 2 == 0) {
            linha.style.background = '#C0C0C0';
        } else {
            linha.style.background = '#DCDCDC';
        }
    }

    document.getElementById("TextInput").value = "";
    document.getElementById("TextMask").value = "";
    document.getElementById("TextVersao").value = "";
}