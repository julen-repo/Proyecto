<?php
require 'conexion.php'; // Incluir el archivo de conexión

$registros = mysqli_query($conn, "select * from mesa");
$vec = [];
while ($reg = mysqli_fetch_array($registros)) {
  $vec[] = $reg;
}

$cad = json_encode($vec);
echo $cad;
?>
