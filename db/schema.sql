DROP DATABASE IF EXISTS employ_db;
CREATE DATABASE employ_db;

USE employ_db;


CREATE TABLE employee (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 first_name VARCHAR(30) NOT NULL,
 last_name VARCHAR(30) NOT NULL,
 job_id INT UNSIGNED NOT NULL,
 INDEX job_ind (job_id),
 manager_id INT UNSIGNED,INDEX manager_ind (manager_id),
);

CREATE TABLE department (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL,
);

CREATE TABLE job (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 title VARCHAR(30) UNIQUE NOT NULL,
 salary DECIMAL UNSIGNED NOT NULL,
 INDEX department_ind (department_id),
);

-- SELECT * FROM employee;
-- SELECT * FROM department;
-- SELECT * FROM job;


