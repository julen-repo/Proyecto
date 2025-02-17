<?php
require 'conexion.php';

header('Content-Type: application/json');

$json = file_get_contents('php://input');

$params = json_decode($json);

mysqli_query($conn, "UPDATE reserva SET 
                          idUsuario = '$params->idUsuario', 
                          idMesa = '$params->idMesa', 
                          inicio = '$params->inicio', 
                          fin = '$params->fin', 
                          juego = '$params->juego' 
                      WHERE id = $params->id");

class Result {}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos modificados';

header('Content-Type: application/json');
echo json_encode($response);
