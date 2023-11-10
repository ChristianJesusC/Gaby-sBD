const Gastos = require('../models/gastosModel');
const express = require("express")

const gastosController = {

    agregarGasto: async (req, res) => {
        try {
            const gasto = new Gastos({
              nomGasto: req.body.nomGasto,
              fechaGasto: req.body.fechaGasto,
              gastoTotal: req.body.gastoTotal
            });
            await gasto.save();
            res.status(201).json(gasto);
          } catch (error) {
            res.status(400).json({ error: error.message });
          }
        },

    eliminarGasto: async (req, res) => {
      try {
        const gasto = await Gastos.findByIdAndRemove(req.params.id);
        if (!gasto) {
          return res.status(404).json({ error: 'Gasto no encontrado' });
        }
        res.json({ mensaje: 'Gasto eliminado con éxito' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },

    obtenerUnGasto: async (req, res) => {
      try {
        const gasto = await Gastos.findById(req.params.id);
        if (!gasto) {
          return res.status(404).json({ error: 'Gasto no encontrado' });
        }
        res.json(gasto);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
    obtenerTodoGastos: async (req, res) => {
      try {
        const gastos = await Gastos.find();
        res.json(gastos);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
}

module.exports = gastosController;