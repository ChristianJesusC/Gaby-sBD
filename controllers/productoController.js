const Producto = require("../models/productosModel")
const express = require("express")

const productosController = {

  agregarProducto : async (req, res) => {
    try {
      const { nombre, cantidad, precioCosto, precioVenta } = req.body;
  
      const nombreSanitizado = sanitizeHtml(nombre).trim();
      const cantidadSanitizada = parseInt(cantidad);
      const precioCostoSanitizado = parseFloat(precioCosto);
      const precioVentaSanitizado = parseFloat(precioVenta);
  
      if (!nombreSanitizado || nombreSanitizado.length < 3) {
        return res.status(400).send('El nombre del producto debe tener al menos 3 caracteres');
      }
  
      if (!cantidadSanitizada || cantidadSanitizada < 0) {
        return res.status(400).send('La cantidad del producto debe ser un número mayor o igual a 0');
      }
  
      if (!precioCostoSanitizado || precioCostoSanitizado <= 0) {
        return res.status(400).send('El precio de costo del producto debe ser un número mayor que 0');
      }
  
      if (!precioVentaSanitizado || precioVentaSanitizado <= 0) {
        return res.status(400).send('El precio de venta del producto debe ser un número mayor que 0');
      }
  
      const producto = new Producto({
        nombre: nombreSanitizado,
        cantidad: cantidadSanitizada,
        precioCosto: precioCostoSanitizado,
        precioVenta: precioVentaSanitizado,
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