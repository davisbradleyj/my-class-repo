-- Drops the task_saver_db if it already exists --
DROP DATABASE IF EXISTS wishdb;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE wishdb;

USE wishdb;

-- Create the table tasks.
CREATE TABLE wishes (
  id int NOT NULL AUTO_INCREMENT,
  person varchar (30) NOT NULL,
  wish varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (person, wish) 
VALUES ("Nadine", "Win Lottery");
INSERT INTO wishes (person, wish) 
("Brad", "Get a job... or win lottery");

