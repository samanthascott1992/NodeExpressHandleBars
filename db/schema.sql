DROP DATABASE if exists burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

DROP TABLE if exists burgers;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(250) NOT NULL,
    devoured BOOLEAN DEFAULT false
);