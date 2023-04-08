function AdicionarInformacao(ip, mask, versao) {

    var tabela = document.getElementById("informacao");
    var qtsLinhas = tabela.rows.length;
    var linha = tabela.insertRow(qtsLinhas);


    var colunaIp = linha.insertCell(0);
    var colunaMask = linha.insertCell(1);
    var colunaVersao = linha.insertCell(2);

    colunaIp.innerHTML = ip;
    colunaMask.innerHTML = mask;
    colunaVersao.innerHTML = versao;

    document.getElementById("TextInput").value = null;
    document.getElementById("TextMask").value = null;
    document.getElementById("TextVersao").value = null;
}