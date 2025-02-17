<?php
require 'conexion.php'; // Incluir el archivo de conexión

// Obtener los parámetros de la solicitud
$idReserva = isset($_GET['idReserva']) ? $_GET['idReserva'] : 0;
$idMesa = $_GET['idMesa'];
$inicio = $_GET['inicio'];
$fin = $_GET['fin'];  

/* Convertir el formato '2025-01-29T19:45' a '2025-01-29 19:45:00'
$inicio = DateTime::createFromFormat('Y-m-d\TH:i', $_GET['inicio'])->format('Y-m-d H:i:s');
$fin = DateTime::createFromFormat('Y-m-d\TH:i', $_GET['fin'])->format('Y-m-d H:i:s')
*/

// Comprobar si hay reservas en el rango de fechas
$query = "
  SELECT COUNT(*) as disponible
  FROM reserva
  WHERE idMesa = $idMesa " . 
  "AND id != $idReserva " . 
  "AND (
    (inicio < '$fin' AND fin > '$inicio')
  )";
$result = mysqli_query($conn, $query);
$row = mysqli_fetch_array($result);

// Enviar respuesta en formato JSON
echo json_encode(['disponible' => $row['disponible'] == 0]);
?>
