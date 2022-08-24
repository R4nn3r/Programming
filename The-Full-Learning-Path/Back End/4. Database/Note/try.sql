    /* How to drop a database */

DROP DATABASE sql_tutorial;


    /* How to create a database */
CREATE DATABASE sql_tutorial;

USE sql_tutorial;


    /* How to create tables  */

CREATE TABLE student(
        student_id int PRIMARY KEY,
        name varchar(20),
        major varchar(25)
    );


CREATE TABLE user_ (
        email varchar(25),
        password varchar(10),
        date_created date,
        type varchar(10),
        emp_id int,
        PRIMARY KEY(email)
    );

CREATE TABLE employee (
        emp_id int PRIMARY KEY,
        first_name varchar(25),
        last_name varchar(25),
        birth_date date,
        sex char(1),
        salary float,
        branch_id int

);

CREATE TABLE branch (
        branch_id int PRIMARY KEY,
        branch_name varchar(25)
);


    /* How to insert data to the created tables */

INSERT INTO student(student_id, name, major)
VALUES (
    918,
    'Yonatan',
    'Software Engineer'
),
(
    887,
    'Abel',
    'Software Engineer'
),
(
    869,
    'Nahom',
    'Software Engineer'
);

INSERT INTO branch (branch_id, branch_name)
VALUES (
	001,
    'Harar'
),
(
	002,
    'Dire Dawa'
),
(
	003,
    'Jijga'
);


    /* How to add a new colum and insert data into it */

ALTER TABLE student 
ADD branch_id int;

UPDATE `sql_tutorial`.`student` 
SET `branch_id` = '1' 
WHERE (`student_id` = '869');


UPDATE `sql_tutorial`.`student` 
SET `branch_id` = '2'   
WHERE (`student_id` = '887');
  

UPDATE `sql_tutorial`.`student` 
SET `branch_id` = '1' 
WHERE (`student_id` = '918');

