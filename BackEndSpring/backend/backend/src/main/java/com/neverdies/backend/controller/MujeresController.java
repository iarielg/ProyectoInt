package com.neverdies.backend.controller;

import com.neverdies.backend.MujeresService;
import com.neverdies.backend.model.mujeres;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mujeres/")
@CrossOrigin("*")
public class MujeresController {
    private final MujeresService mujeresService;
    @Autowired
    public MujeresController(MujeresService mujeresService){
        this.mujeresService=mujeresService;
    }//constructor

    @GetMapping
    public List<mujeres> getAllProducts(){
        return mujeresService.getAllProductos();
    }// get all products

    @GetMapping(path = "{id}")
    public mujeres getProducts(@PathVariable("id") Long id){
        return mujeresService.getProductos(id);
    }// get producto

    @DeleteMapping(path = "{id}")
    public void deleteProducts(@PathVariable("id") Long id){
        mujeresService.deleteProductos(id);
    }// delete products

    @PostMapping
    public void addProducts(@RequestBody mujeres mujeres){
        mujeresService.addProductos(mujeres);
    }// add products

    @PutMapping(path = "{id}")
    public void updateProducts(@PathVariable("id") Long id,
                               @RequestParam(required = false)String descripcion,
                               @RequestParam(required = false)String imagen,
                               @RequestParam(required = false) double precio,
                               @RequestParam(required = false)String color,
                               @RequestParam(required = false)String talla,
                               @RequestParam(required = false)String tipo){
        mujeresService.updateProductos(id, descripcion, imagen, precio, color, talla, tipo);
    }// update products
}//classProductosController