package com.neverdies.backend;

import com.neverdies.backend.model.productos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class ProductosService {
    private final com.neverdies.backend.productosRepository productosRepository;
    @Autowired // el que inyecta las clases
    public ProductosService (com.neverdies.backend.productosRepository productosRepository){
        this.productosRepository=productosRepository;
    }// constructor

    public List<productos> getAllProductos(){
        return productosRepository.findAll();
    }// get all products

    public productos getProductos (Long id){
        return productosRepository.findById(id).orElseThrow(()-> new IllegalStateException("El producto cone le id" +id +"no existe"));
    }// get products

    public void deleteProductos (Long id){
        if (productosRepository.existsById(id)){
            productosRepository.deleteById(id);
        }else {
            throw new IllegalStateException("EL producto con el id" +id +"no exite");
        }// else
    }// delete products

    public void addProductos (productos producto){
        Optional<productos> prodByName= productosRepository.findByName(producto.getNombre());
        if(prodByName.isPresent()){
            throw new IllegalStateException("El producto con el nombre [" + producto.getNombre() + "] ya existe");
        }//is present
        productosRepository.save(producto);
    }// ad product
}//class ProductosService
