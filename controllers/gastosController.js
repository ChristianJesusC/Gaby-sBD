const Gastos = require('../models/gastosModel');
const express = require("express")

const gastosController = {

  agregarGasto : async (req, res) => {
    try {
      const { nomGasto, fechaGasto, gastoTotal } = req.body;
      
      const nomGastoSanitizado = sanitizeHtml(nomGasto).trim();
      const fechaGastoSanitizada = new Date(fechaGasto);
      const gastoTotalSanitizado = parseFloat(gastoTotal);
      if (!nomGastoSanitizado || nomGastoSanitizado.length < 3) {
        return res.status(400).send('El nombre del gasto debe tener al menos 3 caracteres');
      }
  
      if (!fechaGastoSanitizada || isNaN(fechaGastoSanitizada.getTime())) {
        return res.status(400).send('La fecha del gasto debe ser válida');
      }
  
      if (!gastoTotalSanitizado || gastoTotalSanitizado <= 0) {
        return res.status(400).send('El gasto total debe ser un número mayor que 0');
      }
      const gasto = new Gastos({
        nomGasto: nomGastoSanitizado,
        fechaGasto: fechaGastoSanitizada,
        gastoTotal: gastoTotalSanitizado,
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