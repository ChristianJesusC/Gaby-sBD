const express = require('express');
const ventasController = require('../controllers/ventasController');

const router = express.Router();

router.post('/', ventasController.agregarVenta);
router.get('/:id', ventasController.obtenerUnaVenta);
router.get('/', ventasController.obtenerTodasVentas);
router.delete('/:id', ventasController.eliminarVenta);
router.put('/:id', ventasController.actualizarVenta);

module.exports = router;