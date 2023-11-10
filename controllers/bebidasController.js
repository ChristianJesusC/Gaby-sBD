const Bebidas = require('../models/bebidasModel');
const express = require("express")

const bebidasController = {

   agregarBebida: async (req, res) => {
    try {
        const bebida = new Bebidas({
          sabor: sanitizeHtml(req.body.sabor).trim(),
          producto: sanitizeHtml(req.body.producto).trim(),
        });

        if (!bebida.sabor || bebida.sabor.length < 3) {
            return res.status(400).send("El sabor debe tener al menos 3 caracteres");
        }
        await bebida.save();
        res.status(201).json(bebida);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
},


    editarBebida: async (req, res) => {
        try {
            const bebida = await Bebidas.findById(req.params.id);
            if (!bebida) {
              return res.status(404).json({ error: 'Bebida no encontrada' });
            }
            bebida.sabor = req.body.sabor;
            bebida.producto = req.body.producto;
            await bebida.save();

            res.json({ mensaje: 'Bebida actualizada con éxito' });
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
        },

    eliminarBebida: async (req, res) => {
      try {
        const bebida = await Bebidas.findByIdAndRemove(req.params.id);
        if (!bebida) {
          return res.status(404).json({ error: 'Bebida no encontrada' });
        }
        res.json({ mensaje: 'Bebida eliminada con éxito' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },

    obtenerUnaBebida: async (req, res) => {
      try {
        const bebida = await Bebidas.findById(req.params.id);
        if (!bebida) {
          return res.status(404).json({ error: 'Bebida no encontrada' });
        }
        res.json(bebida);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
    obtenerTodasBebidas: async (req, res) => {
      try {
        const bebidas = await Bebidas.find();
        res.json(bebidas);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
}

module.exports = bebidasController;