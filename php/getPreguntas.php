<?php
	 header("Access-Control-Allow-Origin: *");
	    require_once('MySQL.php');
	    require_once('PreguntaDAO.php');
	    $PreguntaDAO= new PreguntaDAO();
	    $res= $PreguntaDAO->regresarPreguntas("pregunta LIKE '%'");
        $data = array();
	    while($row = mysqli_fetch_array($res)) {
			  $data[] =array('id' => $row['id'], 'pregunta' => $row['pregunta'], 'r1' => $row['r1'], 'r2' => $row['r2'], 'r3' => $row['r3'], 'r4' => $row['r4'], 'a' => $row['a'], 'materia' => $row['materia'] );
		}
		echo json_encode($data);
?>