const mongoose = require('mongoose');

const productosSchema = new mongoose.Schema({
   nombre: {
     type: String,
     required: true
   },
   cantidad: {
     type: Number,     required: true
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

const Productos = mongoose.model('Productos', productosSchema);

module.exports = Productos;