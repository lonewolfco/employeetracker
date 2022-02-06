# Employee Tracker | Content Management System

[![License: MIT](https://img.shields.io/badge/License-MIT-lightblue.svg)](https://opensource.org/licenses/MIT)

[GitHub Repo](https://github.com/lonewolfco/employeetracker)


## Table of Contents
- [Description](#description)
- [User Story](#userstory)
- [Acceptance Criteria](#ac)
- [Mock-up](#mockup)
- [Languages Used](#languages)
- [License](#license)

---

## [Description](#description)
Node.js command-line content management system application that allows a company to manage their employees, job roles, and departments. This application functions using Node.js, Inquirer, and MySQL.



## [User Story](#userstory)

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## [Acceptance Criteria](#ac)

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## [Mock-Up & Instructions](#mockup)

The following video shows an example of the application being used from the command line:
<a href="https://www.loom.com/share/035bd814b9884ddaaff1b0bf2db4e194">
    <p>Employee Tracker - Watch Video</p>
    <img style="max-width:666px;" src="https://cdn.loom.com/sessions/thumbnails/035bd814b9884ddaaff1b0bf2db4e194-with-play.gif">
  </a>

<!-- [![A video thumbnail shows the command-line employee management application with a play button overlaying the view.](./Assets/12-sql-homework-video-thumbnail.png)](https://2u-20.wistia.com/medias/2lnle7xnpk) -->


## [Languages Used](#languages)
- Javascript
- Inquirer
- Node
- MySQL2


## [License](#license)

MIT License

Copyright (c) 2022 lonewolfco (Lo Selby)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
