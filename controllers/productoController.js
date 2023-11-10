const Producto = require("../models/productosModel")
const express = require("express")

const productosController = {

    agregarProducto: async (req,res)=>{
        try {
            const producto = new Producto({
              nombre: req.body.nombre,
              cantidad: req.body.cantidad,
              precioCosto: req.body.precioCosto,
              precioVenta: req.body.precioVenta
            });
            await producto.save();
            res.status(201).json(producto);
          } catch (error) {
            res.status(400).json({ error: error.message });
          }
    },

    eliminarProducto: async(req,res)=>{
      try {
        const producto = await Producto.findByIdAndRemove(req.params.id);
        if (!producto) {
          return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json({ mensaje: 'Producto eliminado con éxito' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },

    obtenerUnProduto: async (req, res) => {
      try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
          return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(producto);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
    obtenerTodoProductos: async (req,res)=>{
      try {
        const productos = await Producto.find();
        res.json(productos);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    actualizarProducto: async (req, res) => {
      try {
        const producto = await Producto.findById(req.params.id);
        if (!empleado) {
          return res.status(404).json({ error: 'Empleado no encontrado' });
        }
          producto.nombre= req.body.nombre,
          producto.cantidad= req.body.cantidad,
          producto.precioCosto= req.body.precioCosto,
          producto.precioVenta= req.body.precioVenta

        await producto.save();
        res.json(producto);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
  },


}

module.exports = productosController;