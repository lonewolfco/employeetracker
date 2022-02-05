
-- Create employee database and drop the database if it already exists before creating  --
DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

-- uses the employee database
USE employees;

 
-- Creates Department Table

CREATE TABLE department (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 department_name VARCHAR(30) NOT NULL
);

-- ===========================
-- Creates Role Table

CREATE TABLE roles (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 title VARCHAR(30) UNIQUE NOT NULL,
 salary DECIMAL UNSIGNED NOT NULL,
 department_id INT UNSIGNED,

-- Foreign key = department id
 FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);






-- Creates Employee Table

CREATE TABLE employee (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 first_name VARCHAR(30) NOT NULL,
 last_name VARCHAR(30) NOT NULL,
 role_id INT UNSIGNED,
--  INDEX role_ind (role_id),
--  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id),
 manager_id INT UNSIGNED, 
--  INDEX man_ind (manager_id),
--  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id)


-- Foreign Key Statements
 FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL

--  FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

