const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productoRouter= require("./routes/productosRoutes")

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/GabysBD', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

const connection = mongoose.connection;

app.use('/api/productos', productoRouter);

connection.once('open', () => {
   console.log('Conexión a la BD exitosa...');
});

connection.on('error', (err) => {
   console.log('Error en la conexión a la BD: ', err);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
