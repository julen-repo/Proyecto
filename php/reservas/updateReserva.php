<?php
require 'conexion.php';

header('Content-Type: application/json');

$json = file_get_contents('php://input');

$params = json_decode($json);


$inicio = DateTime::createFromFormat('Y-m-d\TH:i', $params->inicio)->format('Y-m-d H:i:s');
$fin = DateTime::createFromFormat('Y-m-d\TH:i', $params->fin)->format('Y-m-d H:i:s');

mysqli_query($conn, "UPDATE reserva SET 
                          idUsuario = '$params->idUsuario', 
                          idMesa = '$params->idMesa', 
                          inicio = '$inicio', 
                          fin = '$fin', 
                          juego = '$params->juego' 
                      WHERE id = $params->id");

class Result {}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos modificados';

header('Content-Type: application/json');
echo json_encode($response);
