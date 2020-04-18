DROP DATABASE IF EXISTS popquizDB;
CREATE DATABASE popquizDB;
USE popquizDB;

CREATE TABLE quiz (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(45) NULL,
    content VARCHAR(45) NULL,
    grade INT NULL
);

INSERT INTO quiz (title,content,grade)
VALUES ("Math","Algebra",98);
INSERT INTO quiz (title,content,grade)
VALUES ("Physics","Gravity",96);
INSERT INTO quiz (title,content,grade)
VALUES ("English","Grammar",72);
VALUES(1,Bing Crosby,White Christmas,1942,39.903,23.929,5.7,2.185,0.54)
VALUES(2,Bill Haley & his Comets,Rock Around the Clock,1955,36.503,19.961,7.458,5.663,0.76)
VALUES(3,Celine Dion,My Heart Will Go On,1998,35.405,12.636,8.944,23.701,3.61)
VALUES(4,Sinead O'Connor,Nothing Compares 2 U,1990,35.135,14.582,10.242,23.747,2.733)