-- DB SCRIPTS

-- Procedimientos:
-- Obtener el ultimo estado
CREATE PROCEDURE get_last()
    SELECT * FROM state 
        WHERE fecha IN (SELECT max(fecha) FROM state);
--------------------------------------------


-- TABLES
-- ************************************** `state`
CREATE TABLE `state`
(
 `id`     int NOT NULL AUTO_INCREMENT ,
 `fecha`  datetime NOT NULL DEFAULT curdate() ,
 `estado` varchar(45) NOT NULL ,

PRIMARY KEY (`id`)
);











