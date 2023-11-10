const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productoRouter= require("./routes/productosRoutes")
const empleadoRouter= require("./routes/empleadosRoutes")
const bebidasRouter= require("./routes/bebibasRoutes")
const gastosRouter= require("./routes/gastosRoutes")
const heladosRouter= require("./routes/heladosRoutes")
const historialRouter= require("./routes/historialRoutes")
const paletaRouter= require("./routes/paletaRoutes")
const ventasRouter= require("./routes/ventasRoutes")

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/GabysBD', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

const connection = mongoose.connection;

app.use('/api/productos', productoRouter);
app.use('/api/empleado', empleadoRouter);
app.use('/api/bebidas', bebidasRouter);
app.use('/api/gastos', gastosRouter);
app.use('/api/helados', heladosRouter);
app.use('/api/historial', historialRouter);
app.use('/api/paleta', paletaRouter);
app.use('/api/empleado', empleadoRouter);

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
