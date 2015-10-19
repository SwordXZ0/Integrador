<?php   

require('MySQL.php'); 

require('Registro.php');

require('RegistroDAO.php');   

require('EstadoDAO.php');  



$reg= new Registro($_SERVER['REMOTE_ADDR'], gethostbyaddr($_SERVER["REMOTE_ADDR"]), date("j \d\e\l n \d\e Y"), date("h:i:s"), date("D"), date("W"), date("Y"));

$regDAO= new RegistroDAO();
$EstaDAO= new EstadoDAO();

$where="weeku ='".date("W")."' and (ip ='".$_SERVER['REMOTE_ADDR']."' or hostname='".gethostbyaddr($_SERVER["REMOTE_ADDR"])."')";

$res=$regDAO->regresarRegistros($where);



	if($res->num_rows>0){ 

		echo "True"; 

	}   

	else{   
		$regDAO->agregarRegistro($reg);
		$details = json_decode(file_get_contents("http://ipinfo.io/{$_SERVER["REMOTE_ADDR"]}/json"));
		$where2="nombre='".$details->region."'";
		$res2=$EstaDAO->regresarEstados($where2);
		if($res2->num_rows>0){
			$EstaDAO->agregarConteo("'".$details->region."'");
		}else{
			$EstaDAO->agregarConteo("'Desconocido'");
		}
		echo "False"; 
	}   

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