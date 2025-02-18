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

CREATE TABLE Reserva (
	id INT AUTO_INCREMENT PRIMARY KEY,
    idUsuario INT,
    idMesa INT,
    inicio DATETIME,
    fin DATETIME,
    juego VARCHAR (255),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(id) ON DELETE SET NULL,
    FOREIGN KEY (idMesa) REFERENCES Mesa(id) ON DELETE SET NULL
);

-- Insertar 15 usuarios
INSERT INTO Usuario (nombre, apellidos, dni, telefono) VALUES 
('Carlos', 'Fernández Pérez', '12345678A', 666123456),
('María', 'López García', '98765432B', 665987654),
('Luis', 'García Sánchez', '45678901C', 678321987),
('Sofía', 'Martínez Ruiz', '78912345D', 677654321),
('Javier', 'Gómez Fernández', '32198765E', 612345678),
('Ana', 'Torres Morales', '65498732F', 679112233),
('Pablo', 'Ramírez Soto', '43215678G', 634567890),
('Lucía', 'Ortega Díaz', '12349876H', 698765432),
('David', 'Jiménez Herrera', '87654321I', 655444333),
('Isabel', 'Castro Vega', '56781234J', 611223344),
('Diego', 'Núñez Paredes', '11223344K', 677888999),
('Carmen', 'Rojas León', '44332211L', 622334455),
('Raúl', 'Medina Cruz', '99887766M', 688776655),
('Patricia', 'Delgado Ruiz', '66554433N', 699887766),
('Antonio', 'Vargas Molina', '33445566O', 611778899);

-- Insertar 15 mesas
INSERT INTO Mesa (tamano) VALUES 
(2), (4), (6), (8), (10), (2), (4), (6), (8), (10), (2), (4), (6), (8), (10);

-- Insertar 50 reservas asegurando que no haya solapamientos
INSERT INTO Reserva (idUsuario, idMesa, inicio, fin, juego) VALUES
(1, 3, '2024-02-01 14:00:00', '2024-02-01 16:00:00', 'Catan'),
(2, 5, '2024-02-02 18:30:00', '2024-02-02 21:00:00', 'Dungeons & Dragons'),
(3, 2, '2024-02-03 12:00:00', '2024-02-03 14:30:00', 'Carcassonne'),
(4, 4, '2024-02-04 15:00:00', '2024-02-04 18:00:00', 'Terraforming Mars'),
(5, 1, '2024-02-05 19:00:00', '2024-02-05 22:00:00', 'Risk'),
(6, 2, '2024-02-06 13:00:00', '2024-02-06 16:00:00', 'Ticket to Ride'),
(7, 3, '2024-02-07 17:00:00', '2024-02-07 19:30:00', 'Codenames'),
(8, 4, '2024-02-08 20:00:00', '2024-02-08 23:00:00', 'Dungeons & Dragons'),
(9, 1, '2024-02-09 11:00:00', '2024-02-09 13:00:00', 'Catan'),
(10, 5, '2024-02-10 16:00:00', '2024-02-10 18:30:00', 'Pandemic'),
(11, 3, '2024-02-11 12:00:00', '2024-02-11 14:00:00', 'Splendor'),
(12, 2, '2024-02-12 14:30:00', '2024-02-12 17:00:00', 'Dungeons & Dragons'),
(13, 1, '2024-02-13 18:00:00', '2024-02-13 21:00:00', 'Risk'),
(14, 5, '2024-02-14 20:30:00', '2024-02-14 23:00:00', 'Catan'),
(15, 4, '2024-02-15 11:00:00', '2024-02-15 13:30:00', 'Blood Rage'),
(1, 6, '2024-02-16 15:00:00', '2024-02-16 18:00:00', 'Ticket to Ride'),
(2, 7, '2024-02-17 19:00:00', '2024-02-17 21:30:00', 'Everdell'),
(3, 8, '2024-02-18 13:00:00', '2024-02-18 15:00:00', 'Terraforming Mars'),
(4, 9, '2024-02-19 16:30:00', '2024-02-19 19:00:00', 'Pandemic'),
(5, 10, '2024-02-20 12:00:00', '2024-02-20 14:30:00', 'Dungeons & Dragons'),
(6, 11, '2024-02-21 18:00:00', '2024-02-21 21:00:00', 'Carcassonne'),
(7, 12, '2024-02-22 20:00:00', '2024-02-22 23:00:00', 'Codenames'),
(8, 13, '2024-02-23 11:00:00', '2024-02-23 13:00:00', 'Splendor'),
(9, 14, '2024-02-24 14:00:00', '2024-02-24 16:30:00', 'Catan'),
(10, 15, '2024-02-25 17:00:00', '2024-02-25 19:00:00', 'Dungeons & Dragons'),
(11, 1, '2024-02-26 13:00:00', '2024-02-26 16:00:00', 'Risk'),
(12, 2, '2024-02-27 19:30:00', '2024-02-27 22:00:00', 'Everdell'),
(13, 3, '2024-02-28 12:00:00', '2024-02-28 14:30:00', 'Blood Rage'),
(14, 4, '2024-02-29 15:00:00', '2024-02-29 18:00:00', 'Dungeons & Dragons'),
(15, 5, '2024-03-01 20:00:00', '2024-03-01 22:30:00', 'Pandemic'),
(1, 6, '2024-03-02 11:00:00', '2024-03-02 13:30:00', 'Catan'),
(2, 7, '2024-03-03 16:00:00', '2024-03-03 19:00:00', 'Ticket to Ride'),
(3, 8, '2024-03-04 19:30:00', '2024-03-04 22:00:00', 'Dungeons & Dragons'),
(4, 9, '2024-03-05 13:00:00', '2024-03-05 15:30:00', 'Carcassonne'),
(5, 10, '2024-03-06 17:00:00', '2024-03-06 20:00:00', 'Codenames'),
(6, 11, '2024-03-07 14:00:00', '2024-03-07 16:30:00', 'Everdell'),
(7, 12, '2024-03-08 12:00:00', '2024-03-08 14:00:00', 'Pandemic'),
(8, 13, '2024-03-09 18:00:00', '2024-03-09 21:00:00', 'Dungeons & Dragons'),
(9, 14, '2024-03-10 20:00:00', '2024-03-10 22:30:00', 'Blood Rage'),
(10, 15, '2024-03-11 11:00:00', '2024-03-11 13:00:00', 'Risk');
