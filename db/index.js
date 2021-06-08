const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

 //Display all employee data (name/job/salary/manager/manager status/department)   
  findAllEmployees() {
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, job.title, department.name AS department, job.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN job on employee.job_id = job.id LEFT JOIN department on job.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
  }


  createNewEmployee(employee) {
    return this.connection.query("INSERT INTO employee SET ?", employee);
  }

  updateEmployeeJob(employeeId, jobId) {
    return this.connection.query(
      "UPDATE employee SET job_id = ? WHERE id = ?",
      [jobId, employeeId]
    );
  }

  updateManager(employeeId, managerId) {
    return this.connection.query(
      "UPDATE employee SET manager_id = ? WHERE id = ?",
      [managerId, employeeId]
    );
  }

 //  Display all jobs (include what department they are in and the salary for each)
  findAllJobs() {
    return this.connection.query(
      "SELECT job.id, job.title, department.name AS department, job.salary FROM job LEFT JOIN department on job.department_id = department.id;"
    );
  }

  createNewJob(job) {
    return this.connection.query("INSERT INTO job SET ?", job);
  }

 // Display all departments   
  findAllDepartments() {
    return this.connection.query(
      "SELECT department.id, department.name, SUM(job.salary) AS utilized_budget FROM department LEFT JOIN job ON job.department_id = department.id LEFT JOIN employee ON employee.job_id = job.id GROUP BY department.id, department.name"
    );
  }

  createNewDepartment(department) {
    return this.connection.query("INSERT INTO department SET ?", department);
  }

// Search by employee name fits which job which is a part of which department
  findEmployeesByDepartment(departmentId) {
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, job.title FROM employee LEFT JOIN job on employee.job_id = job.id LEFT JOIN department department on job.department_id = department.id WHERE department.id = ?;",
      departmentId
    );
  }

  findEmployeesByManager(managerId) {
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, job.title FROM employee LEFT JOIN job on job.id = employee.job_id LEFT JOIN department ON department.id = job.department_id WHERE manager_id = ?;",
      managerId
    );
  }
}

module.exports = new DB(connection);
