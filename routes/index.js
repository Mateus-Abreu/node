const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const mysql = require('mysql2/promise');
/* GET home page. */

router.get('/', function(_req, res, next) {
  mysql.createConnection({host: 'localhost', user: 'mateus', password: 'mateus',
    database: 'loja', port: 3306,
  }).then((connection) => {
    connection.query('SELECT * FROM clientes')
        .then((result) => {
          res.send(result[0]);
        });
  });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

module.exports = router;
