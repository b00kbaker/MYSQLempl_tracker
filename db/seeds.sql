USE employ_db;

INSERT INTO department (name) VALUES
("Financing"),
("Engineering"),
("Sales"),
("Legal")
;

INSERT INTO job (title, salary, department_id) VALUES
("Receptionist", 32000, 4),
("Senior Developer",80000,2),
("Junior Developer",55000,2),
("Payroll Administrator",55000,9),
("President of Sales",115000,3),
("Project Accountant",80000,1),
("Senior Accountant",90000,1),
("Full Stack Developer",70000, 2),
("Senior Lawyer", 85000,4)
;

INSERT INTO employee (first_name, last_name, job_id, manager_id) VALUES
("Alice", "Waterman", 20, 13),
("Jennifer","Fraser",11, null),
("Austin","Tabernash",1, null),
("Nathan","Sharp",17,5),
("Hazel","Wentworth",19,null),
("Martin","Murphy", 8,4)
;
