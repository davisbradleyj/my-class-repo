-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;
-- Make it so all of the following code will affect favorite_db --
USE favorite_db;
-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Make a string column called "food" which cannot contain null --
  food VARCHAR(30) NOT NULL,
  -- Make an numeric column called "score" --
  score INTEGER(10)
);
CREATE TABLE favorite_songs (
  -- Make a string column called "song" which cannot contain null --
  song VARCHAR(50) NOT NULL,
  -- Make a string column called "artist" --
  artist VARCHAR(30),
  -- Make an integer column called "score" --
  score INTEGER(10)
);
CREATE TABLE favorite_movies (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  -- Create a string column called "movie" which cannot be null --
  movie VARCHAR(30) NOT NULL,
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  five_times BOOLEAN DEFAULT false,
  -- Make an integer column called "score" --
  score INTEGER(10),
  -- Set the primary key of the table to id --
  PRIMARY KEY (id)
);
INSERT INTO favorite_foods (food,score)
VALUES ("Tacos", 100), ("Salsa", 50), ("Burritos", 75), ("Enchiladas", 99);
INSERT INTO favorite_songs (song,artist,score)
VALUES ("You belong with me", "Taylor Swift", 100), ("I'm Yours", "Jazon Mraz", 50), ("Bohemian Rhapsody", "Queen", 75), ("Song 2", "Artist 1", 99);
INSERT INTO favorite_movies (id, movie, five_times, score)
VALUES (id ,"Jumanji", true, 100), (id ,"Bad Boys",five_times, 100), (id ,"Casablanca",false, 50), (id,"The Shawshank Redemption",true,9999999);