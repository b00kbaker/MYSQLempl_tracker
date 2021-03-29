DROP DATABASE IF EXISTS employ_DB;
CREATE database employ_DB;

USE employ_DB;

CREATE TABLE employee (
 id INT PRIMARY KEY,
 first_name VARCHAR(30),
 last_name VARCHAR(30),
 role_id INT,
 manager_id INT NULL,
);

CREATE TABLE department (
  position INT NOT NULL,
  name VARCHAR(30) NULL,
  PRIMARY KEY (position)
);

CREATE TABLE job (
 id INT PRIMARY KEY,
 title VARCHAR(30),
 salary DECIMAL,
 department_id INT,
);

SELECT * FROM employee;
SELECT * FROM department;
SELECT * FROM job;


