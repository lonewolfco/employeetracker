
const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');
const db = require('./db/connection.js');
const chalk = require('chalk');
const figlet = require('figlet');
 
// CHALK STARTER TITLE 
db.connect((error) => {
    if (error) throw error;
    console.log(chalk.cyanBright.bold.inverse(`====================================================================================`));
    console.log(``);
    console.log(chalk.greenBright.bold(figlet.textSync('Employee Tracker')));
    console.log(``);
    console.log(`                                                          ` + chalk.yellowBright.bold('lonewolfco 🐺 '));
    console.log(``);
    console.log(chalk.cyanBright.bold.inverse(`====================================================================================`));
    prompt();
  });


// PROMPT: provide options for user
const prompt = () => {
    inquirer.prompt([
        {
            name: 'options',
            type: 'list',
            message: '🖥️ 🔎 EMPLOYEE DATABASE HOMEPAGE --> Please select an option',
            choices: [
                '👀 VIEW: Employees',
                '👀 VIEW: Job Roles',
                '👀 VIEW: Departments',
                '👀 VIEW: Employees per Department',
                '👀 VIEW: Department Budgets',
                '➕ ADD: Department',
                '➕ ADD: Employee',
                '➕ ADD: Job Role',
                '🚮  DELETE: Department',
                '🚮  DELETE: Employee',
                '🚮  DELETE: Role',
                '✨ UPDATE: Employee Role',
                '✨ UPDATE: Employee Reporting Manager',
                '👋 Exit Employee Database'
            ]
        }
    ])
    .then ((answers) => {
        const { userInput } = answers;


        if (userInput === '👀 VIEW: Employees') {
            viewEmployees();
        }

        if ( userInput === '👀 VIEW: Job Roles') {
            viewRoles();
        }

        if (userInput === '👀 VIEW: Departments') {
            viewDepartments();
        }

        if (userInput === '👀 VIEW: Employees per Department') {
            departmentEmployees();
        }

        if (userInput === '👀 VIEW: Department Budgets') {
            departmentBudget();
        }

        if (userInput === '➕ ADD: Department') {
            departmentBudget();
        }

        if (userInput === '➕ ADD: Employee') {
            addEmployee();
        }

        if (userInput === '➕ ADD: Job Role') {
            addRole();
        }

        if (userInput === '🚮  DELETE: Department') {
            deleteDepartment();
        }

        if (userInput === '🚮  DELETE: Employee') {
            deleteEmployee();
        }

        if (userInput === '🚮  DELETE: Role') {
            deleteRole();
        }

        if (userInput === '✨ UPDATE: Employee Role') {
            updateEmployeerole();
        }

        if (userInput === '✨ UPDATE: Employee Reporting Manager') {
            updateEmployeeManager();
        }

        if (userInput === '👋 Exit Employee Database') {
            connection.end();
        }
    })
}

// db.query('SELECT * FROM employees');

// ====== READ--> SELECT STATEMENTS ========
// ------ view all departments  
    // "SELECT * FROM (department);"

function viewDepartments () {
    console.log('success!');
};


// ------ view all roles 
    // "SELECT * FROM (roles);" JOIN with department
function viewRoles () {
    console.log('success!');
};


// ------ view all employees
    // "SELECT * FROM (employee);" JOIN with role & department
function viewEmployees () {
    console.log('success!');
};


// View Employees Per Department
function departmentEmployees () {
    console.log('success!');
};


// view Department Budgets
function departmentBudget () {
    console.log('success!');
};


// ======= CREATE --> INSERT Statements =========
    // -----add a department
function addDepartment () {
    console.log('success!');
};

    // INSERT INTO (department)
    //     VALUES (id, department_name)
    //         ()


//------ add a role (requires id from department)
function addRole () {
    console.log('success!');
};

    // What is the title of the role?

    // What salary does this role make?

    // What department does this role belong to?
         // SELECT the existing deptartments out for the department table
            // .map() the results from department table to question data for inquirer
            // THEN prompt the user via inquirer for the department information
            // Take the user's answers and go insert them into the role table via the department id


//------ add an employee (requires role id)
function addEmployee () {
    console.log('success!');
};

    // What is the employees first name?
 
    // What is the employees last name?

    // What is the employees role?
        // SELECT the existing roles out for the roles table
            // .map() the results from roles to question data for inquirer
            // THEN prompt the user via inquirer for the role information
            // Take the user's answers and go insert them into the employee table via the role id

     // Who is the employees manager?

// ====== UPDATE statements

// update Employee Role
function updateEmployeerole () {
    console.log('success!');
};

// update Employee Manager
function updateEmployeeManager () {
    console.log('success!');
};


// ========DELETE STATEMENTS=========

// Delete Department
function deleteDepartment () {
    console.log('success!');
};

// Delete Employee
function deleteEmployee () {
    console.log('success!');
};

// Delete Role
function deleteRole () {
    console.log('success!');
};

// prompt ();