-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --
USE programming_db;

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
 id INTEGER(10) NOT NULL AUTO_INCREMENT,
  -- Create a string column called "language" --
 language VARCHAR(20),
  -- Create an integer column called "rating" --
 rating INTEGER (10),
  -- Create a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --
 mastered boolean default true,
  -- Set the id as this table's primary key
  PRIMARY KEY (id)
);

-- Create new example rows
INSERT into programming_languages (language, rating)
VALUES ("HTML", 6);
INSERT into programming_languages (language, rating)
VALUES ("CSS", 7);
INSERT into programming_languages (language, rating)
VALUES ("JavaScript", 5);
INSERT into programming_languages (language, rating)
VALUES ("Python", 1);

CREATE TABLE programmers (
  id INTEGER NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id)
);
INSERT into programmers (first_name,last_name)
VALUE ("Brad","Davis");
INSERT into programmers (first_name,last_name)
VALUE ("Ana","Medrano");
INSERT into programmers (first_name,last_name)
VALUE ("Dan","Fellows");

UPDATE programmers
SET first_name "Dan"
WHERE id = 1;
