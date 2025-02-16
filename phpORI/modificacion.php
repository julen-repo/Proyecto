<?php
$json = file_get_contents('php://input');

$params = json_decode($json);

require("conexion.php");
$con = retornarConexion();


mysqli_query($con, "update articulos set descripcion='$params->descripcion',
                                          precio=$params->precio
                                          where codigo=$params->codigo");


class Result {}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos modificados';

header('Content-Type: application/json');
echo json_encode($response);
