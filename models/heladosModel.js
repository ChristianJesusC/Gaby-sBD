const mongoose = require('mongoose');

const heladosSchema = new mongoose.Schema({
   tipo: {
      type: String,
      required: true
   },
   sabor:{
      type: String,
      required: tru
   },
   cantidad: {
      type: Number,
      required: true
    },
    precioCosto: {
      type: Number,
      required: true
    },
    precioVenta: {
      type: Number,
      required: true
    }
});

const Helados = mongoose.model('Helados', heladosSchema);

module.exports = Helados;  