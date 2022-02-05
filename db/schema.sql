
-- Create employee database and drop the database if it already exists before creating  --
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

-- uses the employee database
USE employee_db;

 
-- Creates Department Table

CREATE TABLE department (
 id INT NOT NULL AUTO_INCREMENT,
 department_name VARCHAR(30) NOT NULL,
 -- Primary Foreign Key = id values
 PRIMARY KEY (id)
);

-- Creates Role Table

 
CREATE TABLE roles (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 title VARCHAR(30) NOT NULL,
 salary DECIMAL,
 department_id INT,

-- Foreign key = department id
 FOREIGN KEY (department_id)
 -- Being referenced to the department table (id column)
 REFERENCES department(id)
 -- on delete of our source column from the other table, swap that data to null
 ON DELETE SET NULL
);






-- Creates Employee Table

CREATE TABLE employee (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 first_name VARCHAR(30) NOT NULL,
 last_name VARCHAR(30) NOT NULL,
 role_id INT,
 manager_id INT, 
-- Foreign key = role_id
 FOREIGN KEY (role_id)
 -- Being referenced to the department table (id column)
 REFERENCES roles(id)
 -- on delete of our source column from the other table, swap that data to null
 ON DELETE SET NULL
);

