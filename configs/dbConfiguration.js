const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createConnection({
  host: localhost,
  user: mateus,
  password: mateus,
  database: loja,
  port: 3306,
});

module.exports = connection;
