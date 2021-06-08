const { prompt } = require('inquirer');
const mysql = require('mysql');
require("console.table");
const db = require("./db");
  
startQA();

function startQA() {
  console.log("Welcome to the Employee Directory!")
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
          'View employees by jobs',
          'Add a new employee',
          'Add a new department',
          'Add a new job',
          'Update an employee job',
          'Close the program'
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
            case 'View employees by jobs':
              employeeJobs();
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
            case 'Add a new job':
              addJob();
              break;
        }
        switch (answer.choice) {
            case 'Update an employee job':
              updateJob();
              break;
        }
        switch (answer.choice) {
          case 'Close the program':
            wrapUp();
            break;
      }
}),
])}




          
         
async function searchAll() {
  const allEmployees = await db.findAllEmployees();
	console.log("\n");
  console.table(allEmployees);

  loadPrompts();
}




async function employeeDepartment() {
 const allDepartments = await db.findAllDepartments();
 const departmentTypes = departments.map(({ id, name }) => ({
   name: name,
   value: id
 }));

 const { departmentId } = await prompt([
   {
     type: "list",
     name: "departmentId",
     message: "Choose a department to view its employees",
     choices: departmentTypes
   }
 ]);

  const byDepartment = await db.findEmployeesByDepartment(departmentId);

  console.log("\n");
  console.table(byDepartment);
  
  loadPrompts();
}

async function employeeJobs() {
  const jobs = await db.findAllJobs();

  console.log("\n");
  console.table(jobs);

  loadPrompts();

}

async function addEmployee() {
  const jobs = await db.findAllJobs();
  const allEmployees = await db.findAllEmployees();
  const newEmployee = await prompt([
    {
      name: "first_name",
      message: "New employee's first name?"
    },
    {
      name:"last_name",
      message: "New employee's last name?"
    }
  ]);

  const jobTypes = jobs.map(({ id, title }) => ({
    name: title,
    value: id
  }));

  const { jobId } = await prompt({
    type: "list",
    name: "jobId",
    message: "What it the new employee's job?",
    choices: jobChoices
  });

  newEmployee.job_id = jobId;

  const assignManager = allEmployees.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id
  }));

  assignManager.unshift({ name: "None", value: null });

  const { managerId } = await prompt({
    type: "list",
    name: "managerId",
    message: "Who is the new employee's manager?",
    choices: assignManager
  });

  newEmployee.manager_id = managerId;

  await db.createNewEmployee(newEmployee);

  console.log(`Added new employee ${newEmployee.first_name} ${newEmployee.last_name} to the directory`);

  loadPrompts();
}

async function addDepartment() {
  const newDepartment = await prompt([
    {
      name: "name",
      message: "Name of the new department"
    }
  ]);

  await db.createNewDepartment(newDepartment);

  console.log(`Added new department ${newDepartment.name} to the directory`);

  loadPrompts();
}

async function addJob() {
  const allDepartments = await db.findAllDepartments();

  const departmentTypes = allDepartments.map(({ id, name}) => ({
    name: name,
    value: id
  }));

  const newJob = await prompt([
    {
      name: "title",
      message: "Name of the new job"
    },
    {
      name: "salary",
      message: "Salary of the new job"
    },
    {
      type: "list",
      name: "department_id",
      message: "This new job will be in which department?",
      choices: departmentTypes
    }
  ]);

  await db.creatNewJob(newJob);

  console.log(`Added new job: ${job.title} to the directory`);

  loadPrompts();
}

async function updateJob() {
 const allEmployees = await db.findAllEmployees();

 const pickEmployee = allEmployees.map(({ id, first_name, last_name }) => ({
   name: `${first_name} ${last_name}`,
   value: id
 }));

 const { employeeId } = await prompt([
   {
     type: "list",
     name: "employeeId",
     message: "Which employee do you want to update their job type?",
     choices: pickEmployee
   }
 ]);

 const jobs = await db.findAllJobs();

 const jobTypes = jobs.map(({ id, title }) => ({
   name: title,
   value: id
 }));

 const { jobId } = await prompt([
   {
     type: "list",
     name: "jobId",
     message: "What job is being assigned to the chosen employee?",
     choices: jobTypes
   }
 ]);

 await db.updateEmployeeJob(employeeId, jobId);

 console.log("Employee's job type was updated in the directory");

 loadPrompts();
}

function wrapUp() {
 console.log("Thank you for using the Employee Directory");
 process.exit();
}


