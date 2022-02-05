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