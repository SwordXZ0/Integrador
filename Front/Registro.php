<?php
	class Registro{
		var $ip;
		var $hostname;
		var $fecha;
		var $hora;
		var $diau;
		var $weeku;
		var $aniou;

		function Registro($ip, $hostname, $fecha, $hora, $diau,$weeku,$aniou){
			$this->ip=$ip;
			$this->hostname=$hostname;
			$this->fecha=$fecha;
			$this->hora=$hora;
			$this->diau=$diau;
			$this->weeku=$weeku;
			$this->aniou=$aniou;
		}

		function retrieve(){
			$arr = array();
			array_push($arr, $this->ip);
			array_push($arr, $this->hostname);
			array_push($arr, $this->fecha);
			array_push($arr, $this->hora);
			array_push($arr, $this->diau);
			array_push($arr, $this->weeku);
			array_push($arr, $this->aniou);
			return $arr;
		}

	}

?>