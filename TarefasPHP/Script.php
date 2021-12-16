<?php

// Exercício n°1  de PHP
// Competição de natação por idade.

session_start(); // Iniciar uma sessão

$categoria = [];
$categoria[] = 'Infantil';
$categoria[] = 'adolecente';
$categoria[] = 'adulto';
$categoria[] = 'idoso';


$nome = $_POST['nome'];
$idade = $_POST['idade'];

/* CONTROLAR ENTRADA DE DADOS*/

if(empty($nome) || empty($idade)){ // Se deixa o nome vazio, vai aparecer essa mansagem.

    $_SESSION["mensagem de erro"] = "Campo nome ou idade, não pode ficar vazio.";
    header('Location:Formulário.php');
    return;
}

elseif(strlen($nome) < 6){// Se for menor de 6 caractes vai aparece essa mensagem.

    $_SESSION["mensagem de erro"] = "Preencha seu nome com mais de 6 caractes ! ";
    header('Location:Formulário.php');
    return;
}

elseif(strlen($nome) > 40){ // Se o nome maior que 40 caracteres vai aparecer essa mangem.

    $_SESSION["mensagem de erro"] = "Preencha seu nome com menos de 40 caractes ! ";
    header('Location:Formulário.php');
    return;
}

elseif(!is_numeric($idade)){ // Se caso o dado informado não for um número, vai aparece essa mensagem. " ! "significa negação.
  
    $_SESSION["mensagem de erro"] = "Preencha sua idade apenas com números ! ";
    header('Location:Formulário.php');
    return;
}


if ($idade >= 6 && $idade <= 12) {

    for ($i = 0; $i < count($categoria); $i++) {

        if ($categoria[$i] == 'Infantil') {
            
            $_SESSION["mensagem de sucesso"] = "O nadador ".$nome." vai competir na categoria ".$categoria[$i];
            header('Location:Formulário.php');
            return;

        }
    }

} else if ($idade >= 13 && $idade <= 18) {

    for ($i = 0; $i < count($categoria); $i++) {

        if ($categoria[$i] == 'adolecente') {

            $_SESSION["mensagem de sucesso"] = "O nadador ".$nome." vai competir na categoria ".$categoria[$i];
            header('Location:Formulário.php');
            return;
        }
    }

} else {
    for ($i = 0; $i < count($categoria); $i++) {

        if ($categoria[$i] == 'adulto') {

            $_SESSION["mensagem de sucesso"] = "O nadador ".$nome." vai competir na categoria ".$categoria[$i];
            header('Location:Formulário.php');
            return;
        }
    }

}

?>