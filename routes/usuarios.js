const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const mysql = require('mysql2');

// Configurar a conexão com o banco de dados
const pool = mysql.createPool({
  host: 'localhost',
  user: 'mateus',
  password: 'mateus',
  database: 'loja',
});

router.get('/', function(req, res, next) {
  pool.query('SELECT * FROM usuários', function(err, results) {
    if (err) {
      return next(err); // Passa o erro para o próximo middleware de erro
    }
    res.json(results); // Envia os resultados como JSON
  });
});

router.post('/', function(req, res, next) {
  res.send('POST usuários');
});

router.delete('/', function(req, res, next) {
  res.send('DELETE usuários');
});

router.put('/', function(req, res, next) {
  res.send('PUT usuários');
});

module.exports = router;
