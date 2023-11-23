const express = require('express');
const historialController = require('../controllers/historialController');

const router = express.Router();

router.post('/agregarHistorial', historialController.agregarHistorial);
router.get('/obtenerTodo', historialController.obtenerTodoHistorial);

module.exports = router;