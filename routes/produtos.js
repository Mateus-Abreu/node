const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

/* GET produtos listing. */
router.get('/', function(req, res, next) {
  res.send('GET produtos');
});

router.post('/', function(req, res, next) {
  res.send('POST produtos');
});

router.delete('/', function(req, res, next) {
  res.send('DELETE produtos');
});

router.put('/', function(req, res, next) {
  res.send('PUT produtos');
});

module.exports = router;

