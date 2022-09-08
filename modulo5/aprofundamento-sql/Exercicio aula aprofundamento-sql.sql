use `Hopper-4314048-lucia-aman`;

CREATE TABLE Projetos (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(40) UNIQUE NOT NULL,
title VARCHAR(255) NOT NULL,
date DATE NOT NULL,
email VARCHAR(255)
);

INSERT INTO Projetos(id, name, title,date)
VALUES ( "001", "LabeSky", "LSy", "2023/10/05");

INSERT INTO Projetos(id, name, title,date)
VALUES ( "002", "Labefy", "LFy", "2024/01/06");

INSERT INTO Projetos(id, name, title,date)
VALUES ( "003", "AstroZoom", "AZm", "2022/12/20");

SELECT * FROM Projetos;

ALTER TABLE Projetos DROP COLUMN title;

DESCRIBE Projetos;

ALTER TABLE Projetos CHANGE date dueDate DATE NOT NULL;

ALTER TABLE Projetos ADD email VARCHAR(255);

ALTER TABLE Projetos MODIFY email VARCHAR(255) UNIQUE;

ALTER TABLE Projetos ADD description VARCHAR(255);

UPDATE Projetos SET description = "Projeto de sistema em nuvem da Labenu." WHERE id= "001";
UPDATE Projetos SET description =  "Projeto de sistema de gerenciamento de músicas da Labenu." WHERE id= "002";
UPDATE Projetos SET description = "Projeto de rede de comunicação da Labenu." WHERE id= "003";

SELECT dueDate FROM Projetos ORDER BY dueDate DESC;
SELECT name, dueDate FROM Projetos ORDER BY dueDate ASC LIMIT 2;

SET SQL_SAFE_UPDATES = 0;