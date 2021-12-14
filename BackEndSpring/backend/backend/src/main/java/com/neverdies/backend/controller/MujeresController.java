package com.neverdies.backend.controller;

import com.neverdies.backend.MujeresService;
import com.neverdies.backend.model.mujeres;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/login/")
@CrossOrigin("*")
public class MujeresController {
    private final MujeresService login;
    @Autowired
    public MujeresController(MujeresService mujeresService){
        this.login=mujeresService;
    }//constructor

    @GetMapping
    public List<mujeres> getAllProducts(){
        return login.getAllProductos();
    }// get all products

    @GetMapping(path = "{id}")
    public mujeres getProducts(@PathVariable("id") Long id){
        return login.getProductos(id);
    }// get producto

    @DeleteMapping(path = "{id}")
    public void deleteProducts(@PathVariable("id") Long id){
        login.deleteProductos(id);
    }// delete products

    @PostMapping
    public void addProducts(@RequestBody mujeres mujeres){
        login.addProductos(mujeres);
    }// add products

    @PutMapping(path = "{id}")
    public void updateProducts(@PathVariable("id") Int id,
                               @RequestParam(required = false)String imagen,
                               @RequestParam(required = false) double precio,
                               @RequestParam(required = false)String color,
                               @RequestParam(required = false)String talla,
                               @RequestParam(required = false)String tipo,
                               @RequestParam(required = false)double cantidad){
        productsService.updateProductos(id, imagen, precio, color, talla, tipo, cantidad);
    }// update products
}//classProductosController