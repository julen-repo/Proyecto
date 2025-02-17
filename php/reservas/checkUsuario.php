<?php
require 'conexion.php'; // Incluir el archivo de conexión

// Obtener el ID del usuario desde la solicitud
$idUsuario = $_GET['idUsuario'];

// Comprobar si el usuario existe
$query = "SELECT COUNT(*) as existe FROM usuario WHERE id = $idUsuario";
$result = mysqli_query($conn, $query);
$row = mysqli_fetch_array($result);

// Enviar respuesta en formato JSON
echo json_encode(['existe' => $row['existe'] > 0]);
?>
