CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (
  -- TABLE CODE TO GO HERE
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
author VARCHAR(50) NOT NULL,
chirp VARCHAR(244) NOT NULL,
published TIMESTAMP default current_timestamp
);

INSERT INTO chirps (author,chirp)
VALUES ("DST","I have the greatest words");