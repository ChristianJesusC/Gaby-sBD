const express = require('express');
const empleadosController = require('../controllers/empleadosController');

const router = express.Router();

router.post('/', empleadosController.agregarEmpleado);
router.get('/:id', empleadosController.obtenerUnEmpleado);
router.get('/', empleadosController.obtenerTodoEmpleados);
router.delete('/:id', empleadosController.eliminarEmpleado);
router.put('/:id',empleadosController.actualizarEmpleado);


module.exports = router;