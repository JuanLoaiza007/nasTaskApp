-- Ingrese al template1 de su postgres y pegue las siguientes lineas.

-- Crear la base de datos
CREATE DATABASE nastaskapp;

-- Conectarse a la base de datos creada
\c nastaskapp;

-- Crear tabla de Proyectos
CREATE TABLE proyecto (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_terminacion TIMESTAMP
);

-- Crear tabla de Tareas
CREATE TABLE tarea (
    id SERIAL PRIMARY KEY,
    proyecto_id INT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_terminacion TIMESTAMP,
    FOREIGN KEY (proyecto_id) REFERENCES proyecto(id) ON DELETE CASCADE
);

-- Crear tabla de Logs
CREATE TABLE logs (
    id SERIAL PRIMARY KEY,
    entidad VARCHAR(50) NOT NULL,
    entidad_id INT NOT NULL,
    operacion VARCHAR(50) NOT NULL,
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    detalles TEXT
);

-- Crear funciones y triggers para registrar las operaciones CRUD en proyecto y tarea

-- Función para registrar logs en proyecto
CREATE OR REPLACE FUNCTION log_proyecto_trigger()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO logs (entidad, entidad_id, operacion, detalles) 
        VALUES ('proyecto', NEW.id, 'CREACION', CONCAT('Proyecto creado con ID: ', NEW.id, ', Nombre: ', NEW.nombre));
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO logs (entidad, entidad_id, operacion, detalles) 
        VALUES ('proyecto', NEW.id, 'MODIFICACION', CONCAT('Proyecto modificado con ID: ', NEW.id, ', Nombre: ', NEW.nombre));
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO logs (entidad, entidad_id, operacion, detalles) 
        VALUES ('proyecto', OLD.id, 'BORRADO', CONCAT('Proyecto borrado con ID: ', OLD.id, ', Nombre: ', OLD.nombre));
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Función para registrar logs en tarea
CREATE OR REPLACE FUNCTION log_tarea_trigger()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO logs (entidad, entidad_id, operacion, detalles) 
        VALUES ('tarea', NEW.id, 'CREACION', CONCAT('Tarea creada con ID: ', NEW.id, ', Nombre: ', NEW.nombre, ', Proyecto ID: ', NEW.proyecto_id));
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO logs (entidad, entidad_id, operacion, detalles) 
        VALUES ('tarea', NEW.id, 'MODIFICACION', CONCAT('Tarea modificada con ID: ', NEW.id, ', Nombre: ', NEW.nombre, ', Proyecto ID: ', NEW.proyecto_id));
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO logs (entidad, entidad_id, operacion, detalles) 
        VALUES ('tarea', OLD.id, 'BORRADO', CONCAT('Tarea borrada con ID: ', OLD.id, ', Nombre: ', OLD.nombre, ', Proyecto ID: ', OLD.proyecto_id));
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers para proyecto
CREATE TRIGGER proyecto_insert AFTER INSERT ON proyecto
FOR EACH ROW EXECUTE FUNCTION log_proyecto_trigger();

CREATE TRIGGER proyecto_update AFTER UPDATE ON proyecto
FOR EACH ROW EXECUTE FUNCTION log_proyecto_trigger();

CREATE TRIGGER proyecto_delete AFTER DELETE ON proyecto
FOR EACH ROW EXECUTE FUNCTION log_proyecto_trigger();

-- Triggers para tarea
CREATE TRIGGER tarea_insert AFTER INSERT ON tarea
FOR EACH ROW EXECUTE FUNCTION log_tarea_trigger();

CREATE TRIGGER tarea_update AFTER UPDATE ON tarea
FOR EACH ROW EXECUTE FUNCTION log_tarea_trigger();

CREATE TRIGGER tarea_delete AFTER DELETE ON tarea
FOR EACH ROW EXECUTE FUNCTION log_tarea_trigger();

-- Ejemplo de inserción de datos
INSERT INTO proyecto (nombre, descripcion, fecha_terminacion) VALUES ('Proyecto 1', 'Descripción del Proyecto 1', '2025-12-31 23:59:59');
INSERT INTO proyecto (nombre, descripcion, fecha_terminacion) VALUES ('Proyecto 2', 'Descripción del Proyecto 2', '2025-12-31 23:59:59');
INSERT INTO proyecto (nombre, descripcion, fecha_terminacion) VALUES ('Proyecto 3', 'Descripción del Proyecto 3', '2025-12-31 23:59:59');
INSERT INTO tarea (proyecto_id, nombre, descripcion, fecha_terminacion) VALUES (1, 'Tarea 1', 'Descripción de la Tarea 1', '2025-06-30 23:59:59');
INSERT INTO tarea (proyecto_id, nombre, descripcion, fecha_terminacion) VALUES (2, 'Tarea 2', 'Descripción de la Tarea 2', '2025-06-30 23:59:59');
INSERT INTO tarea (proyecto_id, nombre, descripcion, fecha_terminacion) VALUES (3, 'Tarea 3', 'Descripción de la Tarea 3', '2025-06-30 23:59:59');

