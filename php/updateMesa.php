<?php
include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $id = $_POST['id'];

    // Actualizar mesa en la base de datos
    $query = "UPDATE Mesa SET id = ? WHERE id = ?";
    if ($stmt = $conn->prepare($query)) {
        $stmt->bind_param("ii", $id, $id);
        if ($stmt->execute()) {
            echo json_encode(["message" => "Mesa actualizada exitosamente"]);
        } else {
            echo json_encode(["message" => "Error al actualizar mesa"]);
        }
    }
    $conn->close();
}
?>
