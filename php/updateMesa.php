<?php
require 'conexion.php';

header('Content-Type: application/json');

$json = file_get_contents('php://input');

$params = json_decode($json);


mysqli_query($con, "update mesa set tamano='$params->tamano'
                                          where id=$params->id");


class Result {}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos modificados';

header('Content-Type: application/json');
echo json_encode($response);
