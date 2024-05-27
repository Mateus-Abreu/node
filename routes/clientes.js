const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();


router.get('/', function(req, res, next) {
  res.send('GET clientes');
});

router.post('/', function(req, res, next) {
  res.send('POST clientes');
});

router.delete('/', function(req, res, next) {
  res.send('DELETE clientes');
});

router.put('/', function(req, res, next) {
  res.send('PUT clientes');
});

module.exports = router;
