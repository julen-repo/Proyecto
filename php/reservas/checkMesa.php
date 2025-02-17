<?php
require 'conexion.php'; // Incluir el archivo de conexión

// Obtener el ID de la mesa desde la solicitud
$idMesa = $_GET['idMesa'];

// Comprobar si la mesa existe
$query = "SELECT COUNT(*) as existe FROM mesa WHERE id = $idMesa";
$result = mysqli_query($conn, $query);
$row = mysqli_fetch_array($result);

// Enviar respuesta en formato JSON
echo json_encode(['existe' => $row['existe'] > 0]);
?>
