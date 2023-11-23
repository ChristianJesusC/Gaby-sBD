const Historial = require('../models/historialModel');
const express = require("express")

const historialController = {

  agregarHistorial: async (req, res) => {
    try {
      const historial = new Historial({
        empleadoId: req.body.empleadoId,
        nombre: req.body.nombre,
        fecha: req.body.fecha
      }); 
      await historial.save();
      res.status(201).json(historial);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  obtenerTodoHistorial: async (req, res) => {
    try {
      const historiales = await Historial.find({});
      res.json(historiales);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = historialController;