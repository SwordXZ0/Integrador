<?php

class EstadoDAO{

		//Constructor

	function agregarConteo($nombre) {
		$con= new MySQL();
		$con->update("estados","contador=contador+1","nombre=".$nombre);  
		$con->close();    

	}

	function regresarEstados($where){
		$con= new MySQL();
		$res=$con->select("*", "estados", $where);
		$con->close();
		return $res;
	}



}

?>