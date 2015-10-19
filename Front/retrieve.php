<?php   

require('MySQL.php'); 

require('EstadoDAO.php');   

$EstaDAO= new EstadoDAO();

$where="nombre LIKE '%'";

$res=$EstaDAO->regresarEstados($where);
$data = array();
while($row = mysqli_fetch_array($res)) {
	$data[] =array('nombre' => $row['nombre'], 'contador' => $row['contador'] );
}
	echo json_encode($data);
	//creamos el condicionamiendo para logearlo o no.   

	/*$sql = "SELECT * ";   

	$sql.= "FROM contador WHERE id ";   

	$es = mysql_query($sql, $con) or die("Error al leer base de datos: ".mysql_error);   

	$visitas = mysql_num_rows($es);   

	$men=$men . "<table width='9%' border='1' height='25' bgcolor='#333333'>" . chr(10);   

	$men=$men . "<tr>" . chr(10);   

	$men=$men . "<td><font color=#FFFFFF>Votos:$visitas</font></td>" . chr(10);   

	$men=$men . "</tr>" . chr(10);   

	$men=$men . "</table>" . chr(10);*/   

?>   