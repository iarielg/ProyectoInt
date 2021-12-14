package com.neverdies.backend.controller;

import com.neverdies.backend.ProductosService;
import com.neverdies.backend.model.productos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos/")
@CrossOrigin("*")
public class ProductosController {
    private final ProductosService productosService;
    @Autowired
    public ProductosController(ProductosService productosService){
        this.productosService=productosService;
    }//constructor

    @GetMapping
    public List<productos> getAllProducts(){
        return productosService.getAllProductos();
    }// get all products

    @GetMapping(path = "{id}")
    public productos getProducts(@PathVariable("id") Long id){
        return productos.getProductos(id);
    }// get producto

    @DeleteMapping(path = "{id}")
    public void deleteProducts(@PathVariable("id") Long id){
        productos.deleteProductos(id);
    }// delete products

    @PostMapping
    public void addProducts(@RequestBody productos producto){
        productos.addProductos(producto);
    }// add products

    @PutMapping(path = "{id}")
    public void updateProducts(@PathVariable("id") Long id,
                               @RequestParam(required = false)String imagen,
                               @RequestParam(required = false) double precio,
                               @RequestParam(required = false)String color,
                               @RequestParam(required = false)String talla,
                               @RequestParam(required = false)String tipo{
        productosService.updateProductos(id, descripcion, imagen, precio, color, talla, tipo, cantidad);
    }// update products
}//classProductosController
