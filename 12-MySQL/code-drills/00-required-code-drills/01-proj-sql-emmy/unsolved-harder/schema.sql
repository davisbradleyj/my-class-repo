CREATE DATABASE emmysDB;

USE emmysDB;

CREATE TABLE nominees (
nominee_id INTEGER(10) AUTO_INCREMENT NOT NULL,
show_name VARCHAR(30),
num_seasons INTEGER(4),
genre VARCHAR(30),
rating DECIMAL (2,2),
PRIMARY KEY (nominee_id)
);

INSERT INTO nominees (show_name, num_seasons, genre, rating) VALUES ("Breaking Bad","7","Drama","9.23");
INSERT INTO nominees (show_name, num_seasons, genre, rating) VALUES ("The Sopranos","7","Drama","9.87");
INSERT INTO nominees (show_name, num_seasons, genre, rating) VALUES ("Game of Thrones","8","Drama","8.76");
INSERT INTO nominees (show_name, num_seasons, genre, rating) VALUES ("Mad Men","6","Drama","9.43");
INSERT INTO nominees (show_name, num_seasons, genre, rating) VALUES ("Seinfeld","13","Comedy","9.01");

SELECT * FROM nominees ;