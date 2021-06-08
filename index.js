const inquirer = require('inquirer');
const mysql = require('mysql');
const table = require("console.table");
const db = require("./db");
  
startQA();

function startQA() {
  loadPrompts();
}

async function loadPrompts() {
  const { choice } = await prompt([
    {
       name: 'begin',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          'View all employees',
          'View employees by department',
          'View employees by roles',
          'Add a new employee',
          'Add a new department',
          'Add a new role',
          'Update an employee role',
        ],
      }
      .then((answer) => {
        switch (answer.choice) {
          case 'View all employees':
            searchAll();
            break;
        }
        switch (answer.choice) {
            case 'View employees by department':
              employeeDepartment();
              break;
        }
        switch (answer.choice) {
            case 'View employees by roles':
              employeeRoles();
              break;
        }
        switch (answer.choice) {
            case 'Add a new employee':
              addEmployee();
              break;
        }
        switch (answer.choice) {
            case 'Add a new department':
              addDepartment();
              break;
        }
        switch (answer.choice) {
            case 'Add a new role':
              addRole();
              break;
        }
        switch (answer.choice) {
            case 'Update an employee role':
              updateRole();
              break;
        }
})
,


          
         
function searchAll() {
	console.log("Employee Rota:\n");

	var query = `SELECT e.id, e.first_name, e.last_name, j.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
  FROM employee e
  LEFT JOIN job j
	ON e.role_id = j.id
  LEFT JOIN department d
  ON d.id = j.department_id
  LEFT JOIN employee m
	ON m.id = e.manager_id`;

	connection.query(query, function (err, res) {
		if (err) throw err;

		console.table(res);

		startQA();
	});
}




const employeeDepartment = () => {

}

const employeeRoles = () => {

}

const addEmployee = () => {

}

const addDepartment = () => {

}

const addRole = () => {

}

const updateRole = () => {

}

const wrapUp = () => {
    inquirer.prompt({
        name: 'wrap',
        type: 'choices',
        message: 'Would you like to make another change?',
        choices: [
         'Yes',
         'No',
        ],
      })
    //   if 'yes' go back to function startQA but if 'no' send a "Your updates are complete and this application will close now" kind of messsage and close out
}


