var express = require('express');
var router = express.Router();



const produtosController = require('../controllers/produtosController');
const nomeMiddlewares = require('../middlewares/nomeMiddlewares');


/* GET produtos listing. */
router.get('/', produtosController.findAll);

/* PUT produtos listing. */
router.put('/', produtosController.update);

/* POST produtos listing. */
router.post('/', nomeMiddlewares.validateName, produtosController.save);

/* DELETE produtos listing. */
router.delete('/:id', produtosController.remove);

module.exports = router;
