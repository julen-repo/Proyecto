<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Permitir peticiones desde cualquier origen

$servername = "localhost";
$username = "root";
$password = "";
$database = "AlquilaMesas";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Comprobar conexión
if ($conn->connect_error) {
    die(json_encode(["error" => "Conexión fallida: " . $conn->connect_error]));
}
?>
