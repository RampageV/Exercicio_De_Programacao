function Calculadora() {

    /* Escolhe uma opção */
    const operacao = Number(prompt('Digite um valor:\n 1 - Somar (+)\n 2 - Subtrair (-)\n 3 - Divisão real(/) \n 4 - Multiplicação (*) \n 5 - Divisão inteira (%) \n 6 - Potencia (**)\n'));

    if (!operacao || operacao > 7) {
        alert('Erro, digite número apenas de 1 a 6');
        Calculadora();

    } else {

        /* Coloca os valores */
        let Primeiro_Valor = Number(prompt('Insira o primeiro valor'));
        let Segundo_Valor = Number(prompt('Insira o segundo valor'));
        let resultado;

        /* Calculo de cada função*/
        function Soma() {
            resultado = Primeiro_Valor + Segundo_Valor;
            alert(`${Primeiro_Valor} + ${Segundo_Valor} = ${resultado}`);
        }

        function Subtracao() {
            resultado = Primeiro_Valor - Segundo_Valor;
            alert(`${Primeiro_Valor} - ${Segundo_Valor} = ${resultado}`);
        }

        function Divisao() {
            resultado = Primeiro_Valor / Segundo_Valor;
            alert(`${Primeiro_Valor} / ${Segundo_Valor} = ${resultado}`);
        }

        function Multiplicador() {
            resultado = Primeiro_Valor * Segundo_Valor;
            alert(`${Primeiro_Valor} * ${Segundo_Valor} = ${resultado}`);
        }

        function DivisaoInteira() {
            resultado = Primeiro_Valor % Segundo_Valor;
            alert(`${Primeiro_Valor} % ${Segundo_Valor} = ${resultado}`);
        }

        function Potencia() {
            resultado = Primeiro_Valor ** Segundo_Valor;
            alert(`A pontencia de ${Primeiro_Valor} elevado ${Segundo_Valor} é ${resultado}`);
        }

        /* Chamada das funções */
        switch (operacao) {
            case 1:
                Soma();
                break;
            case 2:
                Subtracao();
                break;
            case 3:
                Divisao();
                break;
            case 4:
                Multiplicador();
                break;
            case 5:
                DivisaoInteira();
                break;
            case 6:
                Potencia();
                break;
        }

        // Segunda função dentro da primeira função para que ela se repita até a pessoa digita 2 (não);
        function NovaOpcao() {

            let opcao = Number(prompt('Deseja fazer um novo Caluclo ?\n Sim - 1\n Não - 2 '));

            if (!opcao || opcao > 2) {
                alert('Digite apenas número de 1 a 2')
                NovaOpcao();

            } else {

                if (opcao == 1) {
                    Calculadora();

                } else if (opcao == 2) {
                    alert('Obrigado por participar do nosso jogo');

                }
            }
        }

        NovaOpcao();
    }

}

Calculadora();