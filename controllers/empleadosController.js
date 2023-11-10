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
              return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.json({ mensaje: 'Producto eliminado con éxito' });
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
        },

}

module.exports=empleadosController