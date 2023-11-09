const mongoose = require('mongoose');

const heladosSchema = new mongoose.Schema({
   tipo: {
      type: String,
      required: true
   },
   productos_ID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Productos"
 }
});

const Helados = mongoose.model('Helados', heladosSchema);

module.exports = Helados;  