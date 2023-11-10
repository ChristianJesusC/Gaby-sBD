const mongoose = require('mongoose');

const paletasSchema = new mongoose.Schema({
   tipo_Paleta: {
      type: String,
      required: true
   },
   Productos_ID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Productos",
      required: true
   }
});

const Paletas = mongoose.model('Paletas', paletasSchema);

module.exports = Paletas;