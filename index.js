const inquirer = require('inquirer');
const mysql = require('mysql');
const table = require('console.table');



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employ_DB',
  });
  
  connection.connect((err) => {
    if (err) throw err;
    startQA();
});
  
  

// 1st round of questions: What would you like to do? [choice inquirer with up down keys]
//  -View all employees? Throws list of first and last names
    // -Would you like to add an employee?
        // -First name? (input type)
        // -Last name? (input type)
        // -Added to which department? (input choice)
        // -What role from (x) department? (input choice)
        // -What salary amount? (input type)
        // -Who will be their manager? (input choice)
    // -Would you like to remove an employee? (list of full name)
    // -Would you like to update an employee's role?
        //  The employee is in which department?
        // All names in (x) department?
    // -Would you like to update an employee's overviewing manager?
        // -The employee is in which department?
        // All names in (x) department
        // Choose employee then select manger
//  -View all employees by departments? List the 4 departments
//  -View all employees by roles? All roles from all departments

const startQA = () => {
    inquirer.prompt({
        name: 'begin',
        type: 'choices',
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
      })
      .then((answer) => {
        switch (answer.action) {
          case 'View all employees':
            searchAll();
            break;
        }
        switch (answer.action) {
            case 'View employees by department':
              employeeDepartment();
              break;
        }
        switch (answer.action) {
            case 'View employees by roles':
              employeeRoles();
              break;
        }
        switch (answer.action) {
            case 'Add a new employee':
              addEmployee();
              break;
        }
        switch (answer.action) {
            case 'Add a new department':
              addDepartment();
              break;
        }
        switch (answer.action) {
            case 'Add a new role':
              addRole();
              break;
        }
        switch (answer.action) {
            case 'Update an employee role':
              updateRole();
              break;
        }
    })
};


const searchAll = () => {
    inquirer
    .prompt({
      name: 'all',
      type: 'input',
      message: 'Select a name from the list below',
    })
    .then((answer) => {
      const query = 'SELECT first_name last_name FROM employee WHERE ?';
      connection.query(query, { artist: answer.artist }, (err, res) => {
        res.forEach(({ position, song, year }) => {
          console.log(
            `Position: ${position} || Song: ${song} || Year: ${year}`
          );
        });
        wrapUp();
      });
    });
};


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


