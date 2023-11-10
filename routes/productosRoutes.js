const express = require('express');
const productosController = require('../controllers/productoController');

const router = express.Router();

router.post('/', productosController.agregarProducto);
router.get('/:id', productosController.obtenerUnProduto);
router.get('/', productosController.obtenerTodoProductos);
router.delete('/:id', productosController.eliminarProducto);
router.put('/:id', productosController.actualizarProducto);

module.exports = router;