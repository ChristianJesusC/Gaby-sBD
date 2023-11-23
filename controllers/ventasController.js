const Ventas = require('../models/ventasModel');
const express = require("express")

const ventasController = {

   agregarVenta : async (req, res) => {
    try {
      const { fechaVenta, totalVenta, nombres} = req.body;
        const venta = new Ventas({
        fechaVenta: fechaVenta,
        totalVenta: totalVenta,
        nombres: nombres,
      });
  
      await venta.save();
      res.status(201).json(venta);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  

    actualizarVenta: async (req, res) => {
        try {
            const venta = await Ventas.findById(req.params.id);
            if (!venta) {
              return res.status(404).json({ error: 'Venta no encontrada' });
            }
            venta.fechaVenta = req.body.fechaVenta;
            venta.totalVenta = req.body.totalVenta;
            venta.productos_Id = req.body.productos_Id;
            await venta.save();
            res.json({ mensaje: 'Venta actualizada con éxito' });
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
        },

    eliminarVenta: async (req, res) => {
      try {
        const venta = await Ventas.findByIdAndRemove(req.params.id);
        if (!venta) {
          return res.status(404).json({ error: 'Venta no encontrada' });
        }
        res.json({ mensaje: 'Venta eliminada con éxito' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },

    obtenerUnaVenta: async (req, res) => {
      try {
        const venta = await Ventas.findById(req.params.id);
        if (!venta) {
          return res.status(404).json({ error: 'Venta no encontrada' });
        }
        res.json(venta);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
    obtenerTodasVentas: async (req, res) => {
      try {
        const ventas = await Ventas.find();
        res.json(ventas);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
}

module.exports = ventasController;
