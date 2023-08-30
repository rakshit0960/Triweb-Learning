-- CRUD stands for (CREATE, RETRIEVE, UPDATE, DELETE)

-- Create
INSERT INTO teacher(mobile_number,teacher_name) VALUES('1111','t1');
INSERT INTO teacher(mobile_number,teacher_name) VALUES('2222','t2');
INSERT INTO class(class_name,teacher_id) VALUES('class one',2);

-- RETRIEVE
SELECT * FROM teacher;
SELECT * FROM teacher WHERE id = 1;

-- UPDATE
UPDATE teacher SET mobile_number = '2222';
UPDATE teacher SET mobile_number = '2222' WHERE id=2;
UPDATE teacher SET mobile_number = '3333' WHERE id=3;
UPDATE teacher SET teacher_name = 't3' WHERE id=3;

-- DELETE 
DROP TABLE teacher
DELETE FROM teacher WHERE id = 1; -- dose not reset auto increment
TRUNCATE TABLE classes;