
CREATE DATABASE DatabaseName; -- create database named DatabaseName
use DatabaseName; -- set current working database as DatabaseName

-- create table named students
CREATE TABLE students( 
    id int(11) NOT null PRIMARY KEY,
    student_name varchar(50) NOT null,
    class int(11),
    mobile_number int(10)
);


---------------------------------------------------------------------------

CREATE TABLE teacher(
    id int(11) NOT null AUTO_INCREMENT PRIMARY KEY, 
    teacher_name varchar(255) NOT null,
    mobile varchar(100) NOT null   
);


CREATE TABLE classes(
    id int(11) NOT null AUTO_INCREMENT,
    class_name varchar(100) NOT null,
    teacher_id int(11) NOT null,
    PRIMARY KEY(id),
    FOREIGN KEY(teacher_id) REFERENCES teacher(id)
);

SELECT * FROM teacher; -- display all rows from teacher table

ALTER TABLE students MODIFY class class_id int(11) NOT null; -- modify class column structure

ALTER TABLE students ADD FOREIGN KEY (class_id) REFERENCES classes(id); -- add keys

ALTER TABLE students ADD created_on timestamp DEFAULT CURRENT_TIMESTAMP;


DROP TABLE teacher123; -- delete a table