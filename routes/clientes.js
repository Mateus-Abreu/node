var express = require('express');
var router = express.Router();



const clientesController = require('../controllers/clientesController');
const nomeMiddlewares = require('../middlewares/nomeMiddlewares');


/* GET clientes listing. */
router.get('/', clientesController.findAll);

/* PUT clientes listing. */
router.put('/', clientesController.update);

/* POST clientes listing. */
router.post('/', nomeMiddlewares.validateName, clientesController.save);

/* DELETE clientes listing. */
router.delete('/:id', clientesController.remove);

module.exports = router;
