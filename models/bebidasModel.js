const mongoose = require('mongoose');

const bebidasSchema = new mongoose.Schema({
   sabor: {
      type: String,
      required: true
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

const Bebidas = mongoose.model('Bebidas', bebidasSchema);

module.exports=Bebidas;