const express = require('express');
const paletasController = require('../controllers/paletaController');

const router = express.Router();

router.post('/', paletasController.agregarPaleta);
router.get('/:id', paletasController.obtenerUnaPaleta);
router.get('/', paletasController.obtenerTodaPaletas);
router.delete('/:id', paletasController.eliminarPaleta);
router.put('/:id', paletasController.actualizarPaletas);

module.exports = router;