const mongoose = require('mongoose');

const gastosSchema = new mongoose.Schema({
   nomGasto: {
     type: String,
     required: true
   },
   fechaGasto: {
     type: Date,
     required: true
   },
   gastoTotal: {
     type: Number,
     required: true
   }
});

const Gastos = mongoose.model('Gastos', gastosSchema);

module.exports = Gastos;