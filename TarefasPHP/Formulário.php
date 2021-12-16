<?php
session_start(); // Iniciar a sessão, precisa vim antes de qualquer head, se não ele acaba não processando.
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        h1{
           color: silver;
           font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
           font-size: 40px;
        }
    </style>
    <title>Formulário Online !!</title>
</head>

<body>

    <center><h1>Formulário para natação</h1></center>

    <form action="Script.php" method="POST">

        <?php
        
        $MesangemDeSucesso = isset($_SESSION["mensagem de sucesso"]) ? $_SESSION["mensagem de sucesso"] : ''; // '?' significa o if, se essa parte for true depois da '?' vai aparece a mensagem $_SESSION['mensagem - de - erro'], o else é o ':' se caso não ativar;
        if(!empty($MesangemDeSucesso)){
            echo  $MesangemDeSucesso;
        }

        $MesangemDeErro = isset($_SESSION["mensagem de erro"]) ? $_SESSION["mensagem de erro"] : ''; // '?' significa o if, se essa parte for true depois da '?' vai aparece a mensagem $_SESSION['mensagem - de - erro'], o else é o ':' se caso não ativar;
        if(!empty($MesangemDeErro)){
            echo $MesangemDeErro;
        }
        ?>

        <p>Seu nome: <input type="text" name="nome" /></p>
        <p>Sua idade: <input type="text" name="idade" /></p>
        <p><input type="submit" name="btn-entrada" value="Enviar dados"></p>
        
    </form>

</body>

</html>