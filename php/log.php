<?php
	 header("Access-Control-Allow-Origin: *");
    if(isset($_POST['user']) && isset($_POST['password'])){
	    require_once('MySQL.php');
	    require_once('User.php');
	    require_once('UserDAO.php');
	    $userDAO= new UserDAO();
	    $res= $userDAO->regresarUsuarios("name='".$_POST['user']."' and password='".$_POST['password']."'");
        $data = array();
	    while($row = mysqli_fetch_array($res)) {
			  $data[] =array('name' => $row['name'], 'password' => $row['password']);
		}
		if(!empty($res)|| $res->num_rows!=0){
			session_start();
			$_SESSION["user"] = $_POST['user'];
		}
		echo json_encode($data);
	}
	?>