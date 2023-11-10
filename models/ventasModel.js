const mongoose = require('mongoose');

const ventasSchema = new mongoose.Schema({
   fechaVenta: {
      type: Date,
      required: true
   },
   totalVenta: {
      type: Number,
      required: true
   },
   productos_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Productos",
      required: true
   }
});

const Ventas = mongoose.model('Ventas', ventasSchema);

module.exports = Ventas;