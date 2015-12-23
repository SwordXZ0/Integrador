<?php
class User{
	//Clase de usuario
	public $name;
	public $password;
	
	function User($name, $password){
		$this->name=$name;
		$this->password=$password;
	}
	function retrieve(){
		$arr = array();
		array_push($arr, $this->name);
		array_push($arr, $this->password);
		return $arr;
	}
}
?>