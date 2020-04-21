-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS housestarkdb;

-- Created the DB "housestarkdb" (only works on local connections)
CREATE DATABASE housestarkdb;

-- Use the DB housestarkdb for all the rest of the script
USE housestarkdb;
-- Created the table "starks"
CREATE TABLE starks (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(30) NOT NULL,
  alive boolean not null,
  walks boolean not null,
  assassin boolean not null,
  PRIMARY KEY(id)
);
-- Inserted a set of records into the table
INSERT INTO starks (name,alive,walks,assassin)
VALUES ("Robb",false,false,false);
INSERT INTO starks (name,alive,walks,assassin)
VALUES ("Sansa",true,true,false);
INSERT INTO starks (name,alive,walks,assassin)
VALUES ("Bran",true,false,false);
INSERT INTO starks (name,alive,walks,assassin)
VALUES ("Arya",true,true,true);
