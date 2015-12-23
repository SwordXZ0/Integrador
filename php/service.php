<?php
	session_start();
    if(isset($_SESSION['user']) && isset($_POST['type'])){
	    require_once('MySQL.php');
	    require_once('testResult.php');
	    require_once('TestResultDAO.php');
	    $tresultDAO= new testResultDAO();
	    $res= $tresultDAO->regresarResultados("name='".$_SESSION['user']."'");
        $data = array();
	    while($row = mysqli_fetch_array($res)) {
			  $data[] =array('name' => $row['name'], 'type' => $row['type'], 'score' => $row['score'], 'time' => $row['time'], 'date' => $row['date']);
		}
		echo json_encode($data);
	}
	?>