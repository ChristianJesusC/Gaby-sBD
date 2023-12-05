const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require("morgan");

const app = express();

const server = http.createServer(app);

const io = require("socket.io")(server,{
  cors:{origin:"*"}
})

const conectarAMongoDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://render:api123@gabybd.4ihqg4k.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a MongoDB exitosa');
  } catch (error) {
    console.error('Error en la conexión a MongoDB:', error);
  }
};


conectarAMongoDB();

io.on('connection', (socket) => {
  console.log('Empleado conectado');
  
  socket.on("envioMensaje",(data) =>{
    io.emit("envioMensaje",(data))
  })

  socket.on('ventaRealizada', (ventaData) => {
    console.log('Venta realizada:', ventaData);

    io.emit('ventaRealizada', (ventaData))
  });
  
  socket.on('disconnect', () => {
    console.log('Empleado desconectado');
  });
});

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const productoRouter = require('./routes/productosRoutes');
const empleadosRouter = require('./routes/empleadosRoutes');
const bebidasRouter = require('./routes/bebibasRoutes');
const gastosRouter = require('./routes/gastosRoutes');
const heladosRouter = require('./routes/heladosRoutes');
const historialRouter = require('./routes/historialRoutes');
const paletaRouter = require('./routes/paletaRoutes');
const ventasRouter = require('./routes/ventasRoutes');

app.use('/productos', productoRouter);
app.use('/empleados', empleadosRouter);
app.use('/bebidas', bebidasRouter);
app.use('/gastos', gastosRouter);
app.use('/helados', heladosRouter);
app.use('/historial', historialRouter);
app.use('/paleta', paletaRouter);
app.use('/ventas', ventasRouter);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
