<?php
	 header("Access-Control-Allow-Origin: *");
    if(isset($_POST['user']) && isset($_POST['password'])){
	    require_once('MySQL.php');
	    require_once('User.php');
	    require_once('UserDAO.php');
	    $userDAO= new UserDAO();
	    $user=new User($_POST['user'], $_POST['password']);
	    $res= $userDAO->agregarRegistro($user);
	    session_start();
		$_SESSION["user"] = $_POST['user'];
		echo 'agregado';
	}
	else{
		echo 'No se pudo agregar';
	}
?>