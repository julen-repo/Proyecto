DROP DATABASE IF EXISTS AlquilaMesas;
CREATE DATABASE AlquilaMesas;
USE AlquilaMesas;

CREATE TABLE Usuario(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR (255),
    apellidos VARCHAR (255),
    dni VARCHAR (255),
    telefono INT

);

CREATE TABLE Mesa(
	id INT AUTO_INCREMENT PRIMARY KEY,
    tamano INT
);

CREATE TABLE MesaAlquilada (
	id INT AUTO_INCREMENT PRIMARY KEY,
    id_Usuario INT,
    id_Mesa INT,
    inicio DATETIME,
    fin DATETIME,
    juego VARCHAR (255),
    FOREIGN KEY (id_Usuario) REFERENCES Usuario(id) ON DELETE SET NULL,
    FOREIGN KEY (id_Mesa) REFERENCES Mesa(id) ON DELETE SET NULL
);

-- Insertar usuarios con nuevos atributos
INSERT INTO Usuario (nombre, apellidos, dni, telefono) 
VALUES 
('Carlos', 'Fernández Pérez', '12345678A', 666123456),
('María', 'López García', '98765432B', 665987654),
('Luis', 'García Sánchez', '45678901C', 678321987),
('Sofía', 'Martínez Ruiz', '78912345D', 677654321),
('Javier', 'Gómez Fernández', '32198765E', 612345678);

-- Insertar mesas
INSERT INTO Mesa (tamano) VALUES 
(2),
(4),
(6),
(8),
(10);