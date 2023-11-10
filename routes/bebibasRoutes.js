const express = require('express');
const bebidasController = require('../controllers/bebidasController');

const router = express.Router();

router.post('/', bebidasController.agregarBebida);
router.get('/:id', bebidasController.obtenerUnaBebida);
router.get('/', bebidasController.obtenerTodasBebidas);
router.delete('/:id', bebidasController.eliminarBebida);
router.put('/:id',bebidasController.editarBebida);


module.exports = router;