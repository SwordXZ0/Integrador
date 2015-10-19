<?php
class MySQL {
    //Clase SQL
    //Luis Alberto Curiel López A01333510
    //Sergio Alberto Mendoza Zezatti A01333438
    var $connection;  // Variables
    var $server="localhost";
    var $user="ancestra_borre";
    var$password="Aleman1a92+";
    var $dbname="ancestra_borregos";

    //Constructor
    function MySQL() {
        $this->connection=mysqli_connect($this->server, $this->user, $this->password) or die("Unable to Connect");
        if (mysqli_connect_errno()) {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
        }
        $this->selectDatabase($this->dbname);
    }

    //Funciones de operacines
    function update($Table, $Set, $Where) {
        return mysqli_query($this->connection,"UPDATE ".$Table." SET ".$Set." WHERE ".$Where);
    }

    function selectDatabase($name){
        mysqli_select_db($this->connection,$name) or die ("Could not open the db");
        $this->dbname=$name;
    }

    function select($Attr, $Table, $Where) {
        return mysqli_query($this->connection,"SELECT ".$Attr." FROM ".$Table." WHERE ".$Where); 
    }
    
    function insert($Table, $Value) {
        return mysqli_query($this->connection,"INSERT INTO ".$Table." VALUES ".$Value);
    }
    function delete($Table, $Where) {
        return mysqli_query($this->connection,"DELETE FROM ".$Table." WHERE ".$Where);
    }
    function close() {
        mysqli_close($this->connection);
    }
}
?>