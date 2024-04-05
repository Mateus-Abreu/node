var express = require('express');
var router = express.Router();

const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');
const nomeMiddlewares = require('../middlewares/nomeMiddlewares');


/* GET clientes listing. */
router.get('/', clientesController.findAll);

/* PUT clientes listing. */
router.put('/', nomeMiddlewares.validateName, clientesController.update);

/* POST clientes listing. */
router.post('/', clientesController.save);

/* DELETE clientes listing. */
router.delete('/:id', clientesController.remove);

module.exports = router;
