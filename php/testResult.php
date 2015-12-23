<?php
class TestResult{
	//Clase de resultados de prueba
	//public $date;
	public $name;
	public $type;
	public $score;
	public $time;
	
	function TestResult($name, $type, $score, $time ){
		//$this->date=$date;
		$this->name=$name;
		$this->type=$type;
		$this->score=$score;
		$this->time=$time;
	}
	function retrieve(){
		$arr = array();
		//array_push($arr, $date);
		array_push($arr, $this->name);
		array_push($arr, $this->type);
		array_push($arr, $this->score);
		array_push($arr, $this->time);

		return $arr;
	}
}
?>