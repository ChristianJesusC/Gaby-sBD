const Empleado = require("../models/empleadosModel")
const bcrypt = require('bcrypt');
const sanitizeHtml = require('sanitize-html');

const empleadosController = {

  agregarEmpleado: async (req, res) => {
    try {
      const empleado = new Empleado({
        nombre: sanitizeHtml(req.body.nombre).trim().replace(/[^A-ZÁÉÍÓÚÜÑ\s]+/ig, ''),
        apellidoPaterno: sanitizeHtml(req.body.apellidoPaterno).trim().replace(/[^A-ZÁÉÍÓÚÜÑ\s]+/ig, ''),
        apellidoMaterno: sanitizeHtml(req.body.apellidoMaterno).trim().replace(/[^A-ZÁÉÍÓÚÜÑ\s]+/ig, ''),
        genero: req.body.genero,
        edad: parseInt(req.body.edad),
        fechaNacimiento: req.body.fechaNacimiento,
        numTel: req.body.numTel,
        correo: req.body.correo,
        contraseña: await bcrypt.hash(req.body.contraseña, 10),
        salario: req.body.salario,
        tipoEmpleado: sanitizeHtml(req.body.tipoEmpleado).trim().replace(/[^A-ZÁÉÍÓÚÜÑ\s]+/ig, '')
      });

      if (isNaN(empleado.edad)) {
        return res.status(400).send("La edad debe ser un número");
      }

      await empleado.save();
      res.status(201).json(empleado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  eliminarEmpleado: async (req, res) => {
    try {
      const empleado = await Empleado.findByIdAndRemove(req.params.id);
      if (!empleado) {
        return res.status(404).json({ error: 'Empleado no encontrado' });
      }
      res.json({ mensaje: 'Empleado eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  obtenerTodoEmpleados: async (req, res) => {
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
      empleado.nombre = req.body.nombre,
        empleado.apellidoPaterno = req.body.apellidoPaterno,
        empleado.apellidoMaterno = req.body.apellidoMaterno,
        empleado.edad = req.body.edad,
        empleado.numTel = req.body.numTel,
        empleado.correo = req.body.correo,
        empleado.contraseña = req.body.contraseña,
        empleado.salario = req.body.salario,
        empleado.tipoEmpleado = req.body.tipoEmpledo

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
      console.log
      res.json(empleado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  iniciarSesion: async (req, res) => {
    const { correo, contraseña } = req.body;
    try {
      const empleado = await Empleado.findOne({ correo });
      if (empleado) {
        const contraseñaCoincide = await bcrypt.compare(contraseña, empleado.contraseña);
        if (contraseñaCoincide) {
          const { _id, nombre, apellido, puesto } = empleado;
          const empleadoInfo = {
            _id,
            nombre,
            apellido,
            puesto
          };
          res.json({ mensaje: 'Inicio de sesión exitoso', empleado: empleadoInfo });
        } else {
          res.status(401).json({ error: 'Credenciales incorrectas' });
        }
      } else {
        res.status(401).json({ error: 'Credenciales incorrectas' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = empleadosController