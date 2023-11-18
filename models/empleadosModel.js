const mongoose = require('mongoose');

const empleadosSchema = new mongoose.Schema({
   nombre: {
       type: String,
       required: true
   },
   apellidoPaterno: {
       type: String,
       required: true
   },
   apellidoMaterno: {
       type: String,
       required: true
   },
   genero: {
       type: String,
       required: true
   },
   edad: {
       type: Number,
       required: true
   },
   fechaNacimiento: {
       type: String,
       required: true
   },
   numTel: {
       type: Number,
       required: true
   },
   correo: {
       type: String,
       required: true
   },
   contraseña: {
       type: String,
       required: true
   },
   salario: {
       type: Number,
       required: true
   },
   tipoEmpleado: {
        type: String,
        required: true
   }
});

const Empleado = mongoose.model('Empleado', empleadosSchema);

module.exports = Empleado;