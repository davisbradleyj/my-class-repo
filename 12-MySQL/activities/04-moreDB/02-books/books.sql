DROP DATABASE IF EXISTS library_db;
CREATE DATABASE library_db;
USE library_db;

CREATE TABLE books(
  id INTEGER NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE authors(
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30)
);

INSERT into books (title,authorid)
VALUE ("Leaves of Grass",1);
INSERT  into books (title,authorid)
VALUE ("The Quiet American",2);
INSERT into books (title,authorid)
VALUE ("War and Peace",3);
INSERT into books (title,authorid)
VALUE ("The End of the Affair",2);
INSERT into books (title,authorid)
VALUE ("Anna Karenina",3);

INSERT VALUES into authors (first_name,last_name)
VALUES ("Walt","Whitman");
INSERT VALUES into authors (first_name,last_name)
VALUES ("Graham","Greene");
INSERT VALUES into authors (first_name,last_name)
VALUES ("Leo","Tolstoy");

SELECT * FROM books;
SELECT * from authors;

