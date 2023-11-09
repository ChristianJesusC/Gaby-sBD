const mongoose = require('mongoose');

const bebidasSchema = new mongoose.Schema({
   sabor: {
      type: String,
      required: true
   },
   producto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Productos",
      required: true
   }
});

const Bebidas = mongoose.model('Bebidas', bebidasSchema);

module.exports=Bebidas;