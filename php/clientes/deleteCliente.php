<?php
require 'conexion.php';

header('Content-Type: application/json');

$json = file_get_contents('php://input');
$params = json_decode($json);

// Eliminar el cliente con el id proporcionado
mysqli_query($conn, "DELETE FROM usuario WHERE id=$params->id");

class Result {}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'Cliente ' . $params->id . ' eliminado';

header('Content-Type: application/json');
echo json_encode($response);
?>