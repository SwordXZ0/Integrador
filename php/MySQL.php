
<?php
class MySQL {
    var $connection;  // Variables
    var $server="localhost";
    var $user="root";
    var$password="root";
    var $dbname="pruebas";

    //Constructor
    function MySQL() {
        $this->connection=mysqli_connect($this->server, $this->user, $this->password) or die("Unable to Connect");
        if (mysqli_connect_errno()) {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
        }
        $this->selectDatabase($this->dbname);
        return $this->connection;
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