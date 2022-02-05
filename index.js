// Import and require mysql2
const mysql = require('mysql2');
// import and require ctable
const cTable = require('console.table');
// import and require inquirer
const inquirer = require('inquirer');
// require connection js file delare it as a db const
const db = require('./db/connection.js');
 
// const PORT = process.env.PORT || 3001;
// const app = express();
 
// Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
 
// Connect to database




// present user with options
// db.query('SELECT * FROM employees');

// ====== READ--> SELECT STATEMENTS ========
// ------ view all departments  
    // "SELECT * FROM (department);"

function viewDepartments () {

}


// ------ view all roles 
    // "SELECT * FROM (roles);" JOIN with department
function viewRoles () {

}


// ------ view all employees
    // "SELECT * FROM (employee);" JOIN with role & department
function viewEmployees () {

}


// ======= CREATE --> INSERT Statements =========
    // -----add a department
    // INSERT INTO (department)
    //     VALUES (id, department_name)
    //         ()


//------ add a role (requires id from department)
    // What is the title of the role?

    // What salary does this role make?

    // What department does this role belong to?
         // SELECT the existing deptartments out for the department table
            // .map() the results from department table to question data for inquirer
            // THEN prompt the user via inquirer for the department information
            // Take the user's answers and go insert them into the role table via the department id


//------ add an employee (requires role id)
    // What is the employees first name?
 
    // What is the employees last name?

    // What is the employees role?
        // SELECT the existing roles out for the roles table
            // .map() the results from roles to question data for inquirer
            // THEN prompt the user via inquirer for the role information
            // Take the user's answers and go insert them into the employee table via the role id

     // Who is the employees manager?

// ====== UPDATE statements
// update an employee