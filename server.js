
const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');
const db = require('./db/connection.js');
const chalk = require('chalk');
const figlet = require('figlet');
const { async } = require('rxjs');
const { title } = require('process');
// const { result } = require('lodash');
// const { error } = require('console');

 
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
    homepage();
    
    // db.query('SELECT * FROM employee')
    //     .then((results) => {
    //         console.table(results);
    //     })
        
  });


// PROMPT: provide options for user
const homepage = () => {
    inquirer.prompt([
        {
            name: 'choices',
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
        const {choices} = answers;


        if (choices === '👀 VIEW: Employees') {
            viewEmployees();
        }

        if ( choices === '👀 VIEW: Job Roles') {
            viewRoles();
        }

        if (choices === '👀 VIEW: Departments') {
            viewDepartments();
        }

        if (choices === '👀 VIEW: Employees per Department') {
            departmentEmployees();
        }

        if (choices === '👀 VIEW: Department Budgets') {
            departmentBudget();
        }

        if (choices === '➕ ADD: Department') {
            addDepartment();
        }

        if (choices === '➕ ADD: Employee') {
            addEmployee();
        }

        if (choices === '➕ ADD: Job Role') {
            addRole();
        }

        if (choices === '🚮  DELETE: Department') {
            deleteDepartment();
        }

        if (choices === '🚮  DELETE: Employee') {
            deleteEmployee();
        }

        if (choices === '🚮  DELETE: Role') {
            deleteRole();
        }

        if (choices === '✨ UPDATE: Employee Role') {
            updateEmployeerole();
        }

       if (choices === '✨ UPDATE: Employee Reporting Manager') {
            updateEmployeeManager();
        }

        if (choices === '👋 Exit Employee Database') {
            db.end();
        }
    });
};

// db.query('SELECT * FROM employees');

// =========================== VIEW: SELECT STATEMENTS =======================

// --------- view all departments ------------------


async function viewDepartments () {
    const departments = await db.query( 'SELECT * FROM department' );
    console.log(chalk.greenBright.bold(`====================================================================================`));
    console.log(`                              ` + chalk.cyanBright.bold.inverse(`All Departments:`));
    console.log(chalk.greenBright.bold(`====================================================================================`));

    console.table(departments);

    console.log(chalk.greenBright.bold(`====================================================================================`));

};


// --------- view all employees ------------------
    // "SELECT * FROM (employee);" JOIN with role & department
    async function viewEmployees () {
        const employees = await db.query( 'SELECT * FROM employee' );
        console.log(chalk.yellowBright.bold(`====================================================================================`));
        console.log(`                              ` + chalk.cyanBright.bold.inverse(`All Departments:`));
        console.log(chalk.yellowBright.bold(`====================================================================================`));
    
        console.table(employees);

        console.log(chalk.yellowBright.bold(`====================================================================================`));

    };


// --------- view all roles ------------------
    // "SELECT * FROM (roles);" JOIN with department
async function viewRoles () {
    const roles = await db.query ( 'SELECT * FROM roles');
    console.log(chalk.red.bold(`====================================================================================`));
    console.log(`                              ` + chalk.cyanBright.bold.inverse(`All Departments:`));
    console.log(chalk.red.bold(`====================================================================================`));

    console.table(roles);

    console.log(chalk.red.bold(`====================================================================================`));

};



// View Employees Per Department
function departmentEmployees () {

};


// view Department Budgets
function departmentBudget () {

};


// =============== ADD: CREATE --> INSERT Statements =========
    // -------------  add a department
const addDepartment =  () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department_name',
            message: "Enter Department Name:",

        },
    ])
    .then((answer) => {
        let departmentSql = ('INSERT INTO department (department_name) VALUES (?)');
        db.query(departmentSql, answer.department_name, (error, response) => {
            if (error) throw error;
            console.log('NEW DEPARTMENT ADDED');
            viewDepartments();
        });
    });
};


// --------------- ADD ROLE ------------------

const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the Job Role Title:'
        },
        {
            type: 'number',
            name: 'salary',
            message: "Enter This Role's Salary:"
        }
    ])

    .then(answer => {
        const roleAnswers = [answer.title, answer.salary]
   
    const deptSql = ('SELECT * FROM department');
    db.query(deptSql, (error, data) => {
        if (error) throw error;
        const departments = data.map(({id, department_name}) => ({name: department_name, value: id}));
        inquirer.prompt ([
            {
                type: 'list',
                name: 'department',
                message: 'Select the Department This Role Works In:',
                choices: departments
            }
        ])

        .then(departmentChoice => {
            const department = departmentChoice.department;
            roleAnswers.push(department);

            const sql = ('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)');
            db.query(sql, roleAnswers, (error) => {
                if (error) throw error;
                console.log ('NEW ROLE ADDED');
                viewRoles();
            });
        });
    });

    });
};

//------ ADD EMPLOYEE --------------
const addEmployee =  () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "Enter Employee's First Name:",

        },

        {
            type: 'input',
            name: 'last_name',
            message: "Enter Employee's Last Name:",

        }
    ])

        .then(answer => {
            const answers = [answer.first_name, answer.last_name]
            const roleSql = ('SELECT roles.id, roles.title FROM roles')
            db.query ( roleSql, (error, data) => {
                if (error) throw error;
                const roles = data.map(({ id, title }) => ({ name: title, value: id }));
                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'role',
                        message: "Select Employee's Role:",
                        choices: roles
                    }
                ])
                .then(roleOption => {
                    const role = roleOption.role;
                    answers.push(role);
                    const managerSql = ('SELECT * FROM employee');
                    db.query (managerSql, (error, data) => {
                        if (error) throw error;
                        const managers = data.map(({ id, first_name, last_name }) => ({ name: first_name + " " + last_name, value: id }));
                        inquirer.prompt([
                            {
                                type: 'list',
                                name: 'manager',
                                message: "Select Employee's Manager",
                                choices: managers
                            }
                        ])

                        .then(managerChoice => {
                            const manager = managerChoice.manager;
                            answers.push(manager);
                            const sql = ('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)');
                            db.query( sql, answers, (error) => {
                                if (error) throw error;
                                console.log('New Employee Added!');
                                viewEmployees();
                            });
                        });
                    });
                });
            });
        });
};


// ============ UPDATE statements =======================

// ------------    update Employee Role ---------------
function updateEmployeerole () {

};

// -------------    update Employee Manager -------------
function updateEmployeeManager () {

};


// ============= DELETE STATEMENTS ========================

// ------------ Delete Department ---------------
const deleteDepartment = () =>  {
    let sql =   ('SELECT department.id, department.department_name FROM department');
    db.query(sql, (error, response) => {
      if (error) throw error;
      let deptArray = [];
      response.forEach((department) => {deptArray.push(department.department_name);});

      inquirer.prompt([
          {
            name: 'deptChoice',
            type: 'list',
            message: '🗑️ Select a Department to Delete',
            choices: deptArray
          }
        ])
        .then((answer) => {
          let departmentId;

          response.forEach((department) => {
            if (answer.deptChoice === department.department_name) {
              departmentId = department.id;
            }
          });

          let sql = ('DELETE FROM department WHERE department.id = ?');
          db.query(sql, [departmentId], (error) => {
            if (error) throw error;
            console.log(chalk.redBright.bold.inverse('🚫 Department Successfully Deleted'));
            viewDepartments();
          });
        });
    });
};



// ------------- Delete Employee ----------------

    const deleteEmployee = () => {
        let sql =   ('SELECT employee.id, employee.first_name, employee.last_name FROM employee');
    
        db.query(sql, (error, response) => {
          if (error) throw error;
          let employeeArray = [];
          response.forEach((employee) => {employeeArray.push(`${employee.first_name} ${employee.last_name}`);});
    
          inquirer.prompt([
              {
                name: 'employeeChoice',
                type: 'list',
                message: '🗑️ Select an Employee to Delete',
                choices: employeeArray
              }
            ])
            .then((answer) => {
              let employeeId;
    
              response.forEach((employee) => {
                if (
                  answer.employeeChoice ===
                  `${employee.first_name} ${employee.last_name}`
                ) {
                  employeeId = employee.id;
                }
              });
    
              let sql = ('DELETE FROM employee WHERE employee.id = ?');
              db.query(sql, [employeeId], (error) => {
                if (error) throw error;
                console.log(chalk.redBright.bold.inverse('🚫 Employee Successfully Deleted'));
                viewEmployees();
              });
            });
        });
      };


// -------------- Delete Role -----------------
const deleteRole = () =>  {
    let sql =   ('SELECT roles.id, roles.title, roles.salary FROM roles');
    db.query(sql, (error, response) => {
      if (error) throw error;
      let rolesArray = [];
      response.forEach((roles) => {rolesArray.push(roles.title);});

      inquirer.prompt([
          {
            name: 'roleChoice',
            type: 'list',
            message: '🗑️ Select a Role to Delete',
            choices: rolesArray
          }
        ])
        .then((answer) => {
          let roleId;

          response.forEach((roles) => {
            if (answer.roleChoice === roles.title) {
              roleId = roles.id;
            }
          });

          let sql = ('DELETE FROM roles WHERE roles.id = ?');
          db.query(sql, [roleId], (error) => {
            if (error) throw error;
            console.log(chalk.redBright.bold.inverse('🚫 Role Successfully Deleted'));
            viewRoles();
          });
        });
    });
};

