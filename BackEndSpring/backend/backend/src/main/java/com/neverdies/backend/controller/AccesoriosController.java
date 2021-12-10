package com.neverdies.backend.controller;

import com.neverdies.backend.AccesoriosService;
import com.neverdies.backend.model.accesorios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accesorios/")
@CrossOrigin("*")
public class AccesoriosController {
    private final AccesoriosService accesoriosService;
    @Autowired
    public AccesoriosController(AccesoriosService accesoriosService){
        this.accesoriosService=accesoriosService;
    }//constructor

    @GetMapping
    public List<accesorios> getAllProducts(){
        return accesoriosService.getAllProductos();
    }// get all products

    @GetMapping(path = "{id}")
    public accesorios getProducts(@PathVariable("id") Long id){
        return accesoriosService.getProductos(id);
    }// get producto

    @DeleteMapping(path = "{id}")
    public void deleteProducts(@PathVariable("id") Long id){
        accesoriosService.deleteProductos(id);
    }// delete products

    @PostMapping
    public void addProducts(@RequestBody accesorios accesorios){
        accesoriosService.addProductos(accesorios);
    }// add products

    @PutMapping(path = "{id}")
    public void updateProducts(@PathVariable("id") Long id,
                               @RequestParam(required = false)String descripcion,
                               @RequestParam(required = false)String imagen,
                               @RequestParam(required = false) double precio,
                               @RequestParam(required = false)String color,
                               @RequestParam(required = false)String talla,
                               @RequestParam(required = false)String tipo){
        accesoriosService.updateProductos(id, descripcion, imagen, precio, color, talla, tipo);
    }// update products
}//classProductosController
