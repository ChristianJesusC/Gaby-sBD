const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const morgan = require("morgan")

const productoRouter = require('./routes/productosRoutes');
const empleadosRouter = require('./routes/empleadosRoutes');
const bebidasRouter = require('./routes/bebibasRoutes');
const gastosRouter = require('./routes/gastosRoutes');
const heladosRouter = require('./routes/heladosRoutes');
const historialRouter = require('./routes/historialRoutes');
const paletaRouter = require('./routes/paletaRoutes');
const ventasRouter = require('./routes/ventasRoutes');

app.use(cors());
app.use(express.json());
app.use(morgan("dev"))

mongoose.connect('mongodb://127.0.0.1:27017/GabyBD', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

app.use('/productos', productoRouter);
app.use('/empleados', empleadosRouter);
app.use('/bebidas', bebidasRouter);
app.use('/gastos', gastosRouter);
app.use('/helados', heladosRouter);
app.use('/historial', historialRouter);
app.use('/paleta', paletaRouter);
app.use('/ventas', ventasRouter);

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