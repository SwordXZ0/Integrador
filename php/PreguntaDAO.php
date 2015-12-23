<?php
class PreguntaDAO{
    function regresarPreguntas($where){
        $con= new MySQL();
        $res=$con->select("*", "preguntas", $where);
        $con->close();
        return $res;
    }

}
?>