-- Create the database seinfeld and specified it for use.
CREATE DATABASE seinfeld;
USE seinfeld;

-- Create the table actors.
CREATE TABLE actors (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  coolness_points int NOT NULL,
  attitude varchar(60) NOT NULL,
  PRIMARY KEY(id)
);

-- Insert a set of records.
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Jerry", 20, "relaxed");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Elaine", 95, "righteous");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Kramer", 90, "doofus");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("George", 70, "selfish");
