<?php
function retornarConexion() {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "bd1";
    
    //Crear conexión
    $conn = new mysqli($servername, $username, $password, $database);
  return $conn;
}
?>