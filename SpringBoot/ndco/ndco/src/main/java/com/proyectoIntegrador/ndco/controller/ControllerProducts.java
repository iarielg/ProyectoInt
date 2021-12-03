package com.proyectoIntegrador.ndco.controller;

import com.proyectoIntegrador.ndco.ProductsService;
import com.proyectoIntegrador.ndco.models.products;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("api/products")
public class ControllerProducts {
    private final ProductsService _ProductsService;

    @Autowired
    public ControllerProducts(ProductsService _ProductsService){
        this._ProductsService = _ProductsService;
    }//constructor
    @GetMapping
    public List<products> getProduct(){return _ProductsService.getAllProduct();}

    @GetMapping(path = "{productsId}")
    public products getProduct(@PathVariable("productsId") Long productsId){
        return _ProductsService.getProduct(productsId);
    }//getProducts

    @DeleteMapping(path = "productId")
    public void deleteProduct(@PathVariable("productId") Long ProductId){
        _ProductsService.deleteProduct(ProductId);}//deleteProducts
    @PutMapping(path = "{productId}")
    public void updateProduct(
            @PathVariable("productId") Long productId,
            @RequestParam(required = false)String originalNombre,
            @RequestParam(required = false)String newNombre)
    {
        _ProductsService.updateProduct(productId,originalNombre,newNombre);
    }//updateProducts

    @PostMapping
    public void addProduct(@RequestBody products product){_ProductsService.addProduct(product);}
}//class
