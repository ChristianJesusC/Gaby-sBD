const mongoose = require('mongoose');

const historialSchema = new mongoose.Schema({
   empleadoId:{
      type: mongoose.Schema.Types.ObjectId,
      required: true
   },
   nombre: {
      type: String,
      required: true
   },
   fecha: {
      type: String,
      required: true
   }
});

const Historial = mongoose.model('Historial', historialSchema);

module.exports = Historial;