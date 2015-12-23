<?php
class UserDAO{
    //Clase de usuario DAO

    //Constructor
    function agregarRegistro($user) {
        $con= new MySQL();
        $res= $user->retrieve();
        $query = "('".$res[0]."', '".$res[1]."')";
        $con->insert("humans (name, password)", $query);  
        $con->close();    
    }

    function regresarUsuarios($where){
        $con= new MySQL();
        $res=$con->select("*", "humans", $where);
        $con->close();
        return $res;
    }

}
?>