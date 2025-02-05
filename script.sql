DROP DATABASE IF EXISTS AlquilaMesas;
CREATE DATABASE AlquilaMesas;
USE AlquilaMesas;

CREATE TABLE Usuario(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR (255)
);

CREATE TABLE Mesa(
	id INT AUTO_INCREMENT PRIMARY KEY
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

-- Insertar usuarios
INSERT INTO Usuario (nombre) VALUES ('Carlos Fernández'), ('María López'), ('Luis García'), ('Sofía Martínez'), ('Javier Gómez');

-- Insertar mesas
INSERT INTO Mesa () VALUES ();
INSERT INTO Mesa () VALUES ();
INSERT INTO Mesa () VALUES ();
INSERT INTO Mesa () VALUES ();
INSERT INTO Mesa () VALUES ();
INSERT INTO Mesa () VALUES ();
INSERT INTO Mesa () VALUES ();
INSERT INTO Mesa () VALUES ();
INSERT INTO Mesa () VALUES ();
INSERT INTO Mesa () VALUES ();

