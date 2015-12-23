<?php
	session_start();
    if(isset($_SESSION['user']) && isset($_POST['type'])){
	    require_once('MySQL.php');
	    require_once('testResult.php');
	    require_once('TestResultDAO.php');
	   
	    //Esto imprime
	    $Testres= new testResult($_SESSION['user'],$_POST['type'],$_POST['score'],$_POST['time']);
	    $tresultDAO= new testResultDAO();
	    $res= $tresultDAO->agregarRegistro($Testres);
	}
	else{
		echo 'No se pudo';
	}