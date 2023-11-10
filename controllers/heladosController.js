const Helados = require('../models/heladosModel');
const express = require("express")

const heladosController = {

   agregarHelado : async (req, res) => {
    try {
      const { tipo, productos_ID } = req.body;
  
      const tipoSanitizado = sanitizeHtml(tipo).trim();
      if (!tipoSanitizado || tipoSanitizado.length < 3) {
        return res.status(400).send('El tipo de helado debe tener al menos 3 caracteres');
      }
      const helado = new Helados({
        tipo: tipoSanitizado,
        productos_ID: productos_ID,
      });
      await helado.save();
        res.status(201).json(helado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },  

    eliminarHelado: async (req, res) => {
      try {
        const helado = await Helados.findByIdAndRemove(req.params.id);
        if (!helado) {
          return res.status(404).json({ error: 'Helado no encontrado' });
        }
        res.json({ mensaje: 'Helado eliminado con éxito' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },

    obtenerUnHelado: async (req, res) => {
      try {
        const helado = await Helados.findById(req.params.id);
        if (!helado) {
          return res.status(404).json({ error: 'Helado no encontrado' });
        }
        res.json(helado);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
    obtenerTodoHelados: async (req, res) => {
      try {
        const helados = await Helados.find();
        res.json(helados);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    actualizarHelado: async (req, res) => {
      try {
        const helado = await Helados.findById(req.params.id);
        if (!helado) {
          return res.status(404).json({ error: 'Helado no encontrado' });
        }
        helado.tipo = req.body.tipo;
        helado.productos_ID = req.body.productos_ID;
        await helado.save();
        res.json({ mensaje: 'Helado actualizado con éxito' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
}

module.exports = heladosController;
