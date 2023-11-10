const express = require('express');
const heladosController = require('../controllers/heladosController');

const router = express.Router();

router.post('/', heladosController.agregarHelado);
router.get('/:id', heladosController.obtenerUnHelado);
router.get('/', heladosController.obtenerTodoHelados);
router.delete('/:id', heladosController.eliminarHelado);
router.put('/:id',heladosController.actualizarHelado);


module.exports = router;