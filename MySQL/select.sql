SELECT * FROM students; -- select all row from table students
SELECT * FROM students WHERE class_id = 3; -- select all row from table students where id is 3
SELECT * FROM students WHERE class_id = 3 AND class_name = 6; -- and
SELECT * FROM students WHERE class_id = 3 OR class_name = 3; -- or
SELECT student_name FROM students WHERE class_id = 3; -- select column student_name 
SELECT student_name as 'name' FROM students WHERE class_id = 3; -- column name alias 
SELECT * FROM students WHERE class_id IN (1, 2, 3);

SELECT * FROM students WHERE class_id = 3 AND class_name <> 6; -- select all where class_name is not 6
SELECT student_name FROM students WHERE class_id = 3 ORDER BY class_name; -- Order in acs order
SELECT student_name FROM students WHERE class_id = 3 ORDER BY class_name desc; -- Order in desc order
-- inner join
SELECT students st
INNER JOIN classes c1 ON st.class_id = cl.id
WHERE st.id = 2;