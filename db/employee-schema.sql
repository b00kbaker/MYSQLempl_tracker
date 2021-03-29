DROP DATABASE IF EXISTS employ_DB;
CREATE database employ_DB;

USE employ_DB;

-- 'id' is the primary key
-- 'role_id' , 'manager_id' , 'department_id' are all foreign keys *Need to dig into this*

CREATE TABLE employee (
 id INT NOT NULL AUTO_INCREMENT,
 first_name VARCHAR(30),
 last_name VARCHAR(30),
 role_id INT,
 manager_id INT NULL,
);

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  PRIMARY KEY (position)
);

CREATE TABLE job (
 id INT NOT NULL AUTO_INCREMENT,
 title VARCHAR(30),
 salary DECIMAL,
 department_id INT,
);

SELECT * FROM employee;
SELECT * FROM department;
SELECT * FROM job;


