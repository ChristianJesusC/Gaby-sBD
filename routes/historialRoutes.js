const express = require('express');
const historialController = require('../controllers/historialController');

const router = express.Router();

router.post('/', historialController.agregarHistorial);
router.get('/:id', historialController.obtenerUnHistorial);
router.get('/', historialController.obtenerTodoHistorial);
router.delete('/:id', historialController.eliminarHistorial);

module.exports = router;