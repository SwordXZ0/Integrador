<?php
class RegistroDAO{
		//Constructor
	function agregarRegistro($registro) {
		$con= new MySQL();
		$res= $registro->retrieve();
		$query = "('".$res[0]."', '".$res[1]."', '".$res[2]."', '".$res[3]."', '".$res[4]."', '".$res[5]."', '".$res[6]."')";
		$con->insert("contador (ip, hostname, fecha, hora, diau, weeku, aniou)", $query);  
		$con->close();    
	}

	function regresarRegistros($where){
		$con= new MySQL();
		$res=$con->select("*", "contador", $where);
		$con->close();
		return $res;
	}

}
?>