<?php
require 'conexion.php';

header('Content-Type: application/json');

$json = file_get_contents('php://input');

$params = json_decode($json);

// Eliminar la mesa con el id proporcionado
mysqli_query($conn, "DELETE FROM reserva WHERE id=$params->id");

class Result {}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'mesa ' . $params->id . ' eliminada';

header('Content-Type: application/json');
echo json_encode($response);
