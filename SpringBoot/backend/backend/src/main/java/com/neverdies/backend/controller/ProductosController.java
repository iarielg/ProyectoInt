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
        return productosService.getProductos(id);
    }// get producto

    @DeleteMapping(path = "{id}")
    public void deleteProducts(@PathVariable("id") Long id){
        productosService.deleteProductos(id);
    }// delete products

    @PostMapping
    public void addProducts(@RequestBody productos producto){
        productosService.addProductos(producto);
    }// add products

    @PutMapping(path = "{id}")
    public void updateProducts(@PathVariable("id") Long id,
                               @RequestParam(required = false)String descripcion,
                               @RequestParam(required = false)String imagenURL,
                               @RequestParam(required = false) double precio,
                               @RequestParam(required = false)String color,
                               @RequestParam(required = false)String talla,
                               @RequestParam(required = false)String genero){
        productosService.updateProductos(id, descripcion, imagenURL, precio, color, talla, genero);
    }// update products
}//classProductosController
