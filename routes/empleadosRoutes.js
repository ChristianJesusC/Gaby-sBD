const {Router} = require('express');
const empleadosController = require('../controllers/empleadosController');

const router = Router();

router.post('/agregar', empleadosController.agregarEmpleado);
router.get('/obtener/:id', empleadosController.obtenerUnEmpleado);
router.get('/obtener', empleadosController.obtenerTodoEmpleados);
router.delete('/eliminar/:id', empleadosController.eliminarEmpleado);
router.put('/actualizar/:id',empleadosController.actualizarEmpleado);
router.post('/login', empleadosController.iniciarSesion);


module.exports = router;