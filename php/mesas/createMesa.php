<?php
require 'conexion.php';

$json = file_get_contents('php://input');

$params = json_decode($json);

$stmt = mysqli_prepare($conn, "INSERT INTO mesa (tamano) VALUES (?)");
mysqli_stmt_bind_param($stmt, "i", $params->tamano);

class Result {}

$response = new Result();

if (mysqli_stmt_execute($stmt)) {
    $response->resultado = 'OK';
    $response->mensaje = 'Datos grabados';
} else {
    $response->resultado = 'ERROR';
    $response->mensaje = 'Error al insertar en la base de datos';
}

header('Content-Type: application/json');
echo json_encode($response);

?>