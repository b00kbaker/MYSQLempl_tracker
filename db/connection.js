const util = require("util");
const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "employ_db"
});

connection.connect
connection.query = util.promisify(connection.query);



module.exports = connection;
