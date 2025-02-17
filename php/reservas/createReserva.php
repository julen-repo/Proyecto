<?php
require 'conexion.php';

$json = file_get_contents('php://input');

$params = json_decode($json);

// Convertir el formato '2025-01-29T19:45' a '2025-01-29 19:45:00'
$inicio = DateTime::createFromFormat('Y-m-d\TH:i', $params->inicio)->format('Y-m-d H:i:s');
$fin = DateTime::createFromFormat('Y-m-d\TH:i', $params->fin)->format('Y-m-d H:i:s');


$stmt = mysqli_prepare($conn, "INSERT INTO reserva (idUsuario, idMesa, inicio, fin, juego) VALUES (?, ?, ?, ?, ?)");
mysqli_stmt_bind_param($stmt, "iisss", $params->idUsuario, $params->idMesa, $inicio, $fin, $params->juego);

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