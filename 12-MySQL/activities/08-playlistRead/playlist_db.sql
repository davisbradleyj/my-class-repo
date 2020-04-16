DROP DATABASE IF EXISTS playlistDB;

CREATE DATABASE playlistDB;

USE playlistDB;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45),
  PRIMARY KEY (id)
);

INSERT INTO songs (title,artist,genre)
VALUES ("Come Fly With Me","Frank Sinatra","Traditional Pop");
INSERT INTO songs (title,artist,genre)
VALUES ("Paradise City","Guns N Roses","Rock");
INSERT INTO songs (title,artist,genre)
VALUES ("Sabotage","Beastie Boys","Hip Hop");
INSERT INTO songs (title,artist,genre)
VALUES ("Knights of Cydonia","Muse","Rock");


