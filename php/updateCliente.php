<?php
require 'conexion.php';

header('Content-Type: application/json');

$json = file_get_contents('php://input');
$params = json_decode($json);

mysqli_query($conn, "UPDATE usuario SET nombre='$params->nombre', apellidos='$params->apellidos', dni='$params->dni', telefono='$params->telefono' WHERE id=$params->id");

class Result {}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'Datos modificados';

header('Content-Type: application/json');
echo json_encode($response);
?>