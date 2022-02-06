-- contains a set of sql statements to seed in the data to the table

INSERT INTO department (department_name)
    VALUES 
        ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("Marketing"),
        ("Customer Success"),
        ("Technical Support");


INSERT INTO roles (title, salary, department_id)
    VALUES
        ("Success Department Manager", 70000, 6),
        ("Support Engineer", 110000, 2);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
        ("Lo", "Selby", 1, 1),
        ("Mesa", "Awroo", 2, 1);