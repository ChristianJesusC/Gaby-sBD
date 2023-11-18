const Empleado = require("../models/empleadosModel")
const bcryp = require("bcryptjs")

const empleadosController={

agregarEmpleado: async (req, res) => {
  
  const {nombre,apellidoPaterno,apellidoMaterno,genero,edad,fechaNacimiento,numTel,correo,contraseña,salario,tipoEmpleado}=req.body
  try {
    const constaseñaHash = await bcryp.hash(contraseña,10)

    const empleados = new Empleado({
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      genero,
      edad,
      fechaNacimiento,
      numTel,
      correo,
      contraseña:constaseñaHash,
      salario,
      tipoEmpleado
    });

    const empleadoGuardado = await empleados.save();
    res.status(201).json(empleadoGuardado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
},

    eliminarEmpleado: async (req,res)=>{
        try {
            const empleado = await Producto.findByIdAndRemove(req.params.id);
            if (!empleado) {
              return res.status(404).json({ error: 'Empleado no encontrado' });
            }
            res.json({ mensaje: 'Empleado eliminado con éxito' });
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    },
    
      obtenerTodoEmpleados: async(req,res)=>{
          try {
              const empleado = await Empleado.find();
              res.json(empleado);
            } catch (error) {
              res.status(500).json({ error: error.message });
            }
      },

    actualizarEmpleado: async (req, res) => {
        try {
          const empleado = await Empleado.findById(req.params.id);
          if (!empleado) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
          }
          empleado.nombre=req.body.nombre,
          empleado.apellidoPaterno=req.body.apellidoPaterno,
          empleado.apellidoMaterno=req.body.apellidoMaterno,
          empleado.edad=req.body.edad,
          empleado.numTel=req.body.numTel,
          empleado.correo=req.body.correo,
          empleado.contraseña=req.body.contraseña,
          empleado.salario=req.body.salario,
          empleado.tipoEmpleado=req.body.tipoEmpledo

          await empleado.save();
          res.json(empleado);
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
    },

    obtenerUnEmpleado: async (req, res) => {
        try {
          const empleado = await Empleado.findById(req.params.id);
          if (!empleado) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
          }
          res.json(empleado);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
    },
    
    iniciarSesion: async (req, res) => {
      const { correo, contraseña } = req.body;
      try {
        const empleado = await Empleado.findOne({ correo, contraseña });
        if (empleado) {
          res.json({ mensaje: 'Inicio de sesión exitoso' });
        } else {
          res.status(401).json({ error: 'Error incorrectas' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
}

module.exports=empleadosController