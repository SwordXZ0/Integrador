
<?php
class TestResultDAO{
    //Clase de resultados de prueba DAO

    //Constructor
    function agregarRegistro($testResult) {
        $con= new MySQL();
        $res= $testResult->retrieve();
        $query = "('".$res[0]."', '".$res[1]."', ".$res[2].", '".$res[3]."')";
        $con->insert("results (name, type, score, time)", $query);  
        $con->close();    
    }

    function regresarResultados($where){
        $con= new MySQL();
        $res=$con->select("*", "results", $where);
        $con->close();
        return $res;
    }

}
?>