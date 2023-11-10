const express = require('express');
const gastosController = require('../controllers/gastosController');

const router = express.Router();

router.post('/', gastosController.agregarGasto);
router.get('/:id', gastosController.obtenerUnGasto);
router.get('/', gastosController.obtenerTodoGastos);
router.delete('/:id', gastosController.eliminarGasto);

module.exports = router;