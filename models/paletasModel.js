const mongoose = require('mongoose');

   const paletasSchema = new mongoose.Schema({
      tipo_Paleta: {
         type: String,
         required: true
      },
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

const Paletas = mongoose.model('Paletas', paletasSchema);

module.exports = Paletas;