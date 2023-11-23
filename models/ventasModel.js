const mongoose = require('mongoose');

const ventasSchema = new mongoose.Schema({
   fechaVenta: {
      type: String,
      required: true
   },
   totalVenta: {
      type: Number,
      required: true
   },
   nombres: [{
      type: String,
      required: true
   }]
});

const Ventas = mongoose.model('Ventas', ventasSchema);

module.exports = Ventas;