DROP DATABASE IF EXIST moviePlannerDB;
CREATE DATABASE moviePlannerDB;
USE moviePlannerDB;

CREATE TABLE movies (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
movie VARCHAR(255) NOT NULL
);
INSERT INTO movies (movie)
VALUES ("Millers Crossing");
INSERT INTO movies (movie)
VALUES ("Barton Fink");
INSERT INTO movies (movie)
VALUES ("The Big Lebowski");