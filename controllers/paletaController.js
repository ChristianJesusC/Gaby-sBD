const Paletas = require('../models/paletasModel');
const express = require("express")

const paletasController = {

  agregarPaleta : async (req, res) => {
    try {
      const { tipo_Paleta, sabor, cantidad, precioCosto, precioVenta } = req.body;
      const nuevaPaleta = new Paletas({
        tipo_Paleta,
        sabor,
        cantidad,
        precioCosto,
        precioVenta
      });
      const paletaGuardada = await nuevaPaleta.save();
      res.status(201).json(paletaGuardada);
    } catch (error) {
      res.status(500).json({ error: 'Ocurrió un error al guardar la paleta' });
    }
  },
  
    eliminarPaleta: async (req, res) => {
      try {
        const paleta = await Paletas.findByIdAndRemove(req.params.id);
        if (!paleta) {
          return res.status(404).json({ error: 'Paleta no encontrada' });
        }
        res.json({ mensaje: 'Paleta eliminada con éxito' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },

    obtenerUnaPaleta: async (req, res) => {
      try {
        const paleta = await Paletas.findById(req.params.id);
        if (!paleta) {
          return res.status(404).json({ error: 'Paleta no encontrada' });
        }
        res.json(paleta);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
    obtenerTodaPaletas: async (req, res) => {
      try {
        const paletas = await Paletas.find();
        res.json(paletas);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    actualizarPaletas: async (req, res) => {
        try {
          const paleta = await Paletas.findById(req.params.id);
          if (!paleta) {
            return res.status(404).json({ error: 'Paleta no encontrado' });
          }
          paleta.tipo_Paleta = req.body.tipo_Paleta;
          paleta.Productos_ID = req.body.Productos_ID;
          await paleta.save();
          res.json({ mensaje: 'Paleta actualizado con éxito' });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },
}

module.exports = paletasController;
