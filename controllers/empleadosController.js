const express = require("express")
const Empleados = require("../models/empleadosModel")

const empleadosController={

    agregarEmpleado: async (req,res)=>{
        try {
            const empleado=new Emppleado({
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
        } catch (error) {
            
        }
    }

}

module.exports=empleadosController