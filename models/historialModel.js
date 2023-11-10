const mongoose = require('mongoose');

const historialSchema = new mongoose.Schema({
   fecha: {
      type: Date,
      required: true
   },
   empleados_ID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Productos",
      required: true
   }
});

const Historial = mongoose.model('Historial', historialSchema);

module.exports = Historial;