const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'not3&Sun',
    database: 'employ_DB',
  });
  
//   connection.connect((err) => {
//     if (err) throw err;
//     ();
//   });
  
  

// 1st round of questions: What would you like to do? [choice inquirer with up down keys]
//  -View all employees? Throws list of first and last names
    // -Would you like to add an employee?
        // -First name? (input type)
        // -Last name? (input type)
        // -Added to which department? (input choice)
        // -What role from (x) department? (input choice)
        // -What salary amount? (input type)
        // -Who will be their manager? (input choice)
    // -Would you like to remove an employee?
    // -Would you like to update an employee's role?
    // -Would you like to update an employee's overviewing manager?
//  -View all employees by departments? List the 4 departments
//  -View all employees by roles? All roles from all departments