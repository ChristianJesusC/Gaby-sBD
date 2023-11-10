const Historial = require('../models/historialModel');
const express = require("express")

const historialController = {

    agregarHistorial: async (req, res) => {
        try {
            const historial = new Historial({
              fecha: req.body.fecha,
              empleados_ID: req.body.empleados_ID
            });
            await historial.save();
            res.status(201).json(historial);
          } catch (error) {
            res.status(400).json({ error: error.message });
          }
        },

    eliminarHistorial: async (req, res) => {
      try {
        const historial = await Historial.findByIdAndRemove(req.params.id);
        if (!historial) {
          return res.status(404).json({ error: 'Historial no encontrado' });
        }
        res.json({ mensaje: 'Historial eliminado con éxito' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },

    obtenerUnHistorial: async (req, res) => {
      try {
        const historial = await Historial.findById(req.params.id).populate('empleados_ID');
        if (!historial) {
          return res.status(404).json({ error: 'Historial no encontrado' });
        }
        res.json(historial);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
    obtenerTodoHistorial: async (req, res) => {
      try {
        const historiales = await Historial.find().populate('empleados_ID');
        res.json(historiales);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
}

module.exports = historialController;