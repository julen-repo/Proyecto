<?php
include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $id = $_POST['id'];

    // Insertar mesa en la base de datos
    $query = "INSERT INTO Mesa (id) VALUES (?)";
    if ($stmt = $conn->prepare($query)) {
        $stmt->bind_param("i", $id);
        if ($stmt->execute()) {
            echo json_encode(["message" => "Mesa creada exitosamente"]);
        } else {
            echo json_encode(["message" => "Error al crear mesa"]);
        }
    }
    $conn->close();
}
?>
