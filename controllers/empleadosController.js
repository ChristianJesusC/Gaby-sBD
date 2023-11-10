const express = require("express")
const Empleados = require("../models/empleadosModel")

const empleadosController={

    agregarEmpleado: async (req,res)=>{
        try {
            const empleado=new Empleados({
               nombre:req.body.nombre,
               apellidoPaterno:req.body.apellidoPaterno,
               apellidoMaterno:req.body.apellidoMaterno,
               edad:req.body.edad,
               numTel:req.body.numTel,
               correo:req.body.correo,
               contraseña:req.body.contraseña,
               salario:req.body.salario,
               tipoEmpleao:req.body.tipoEmpledo
            })
            await empleado.save();
            res.status(201).json(empleado);
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
            const empleado = await Empleados.find();
            res.json(empleado);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    },

    actualizarEmpleado: async (req, res) => {
        try {
          const empleado = await Empleados.findById(req.params.id);
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
          empleado.tipoEmpleao=req.body.tipoEmpledo

          await empleado.save();
          res.json(empleado);
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
    },

    obtenerUnEmpleado: async (req, res) => {
        try {
          const empleado = await Empleados.findById(req.params.id);
          if (!empleado) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
          }
          res.json(empleado);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
    },
    
}

module.exports=empleadosController