const mysql = require("mysql2");
const util = require('util');

const connection = mysql.createConnection({
  host: "127.0.0.1",
  // Your username
  user: "root",
  // Your password
  password: "losql",
  database: "employees"
});

connection.query = util.promisify( connection.query );

connection.connect(function (err) {
  if (err) {
    throw err;
  } else {
    console.log('Succesfully connected to mysql')
  }
});

module.exports = connection;