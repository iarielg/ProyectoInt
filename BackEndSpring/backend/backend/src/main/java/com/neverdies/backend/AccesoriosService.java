package com.neverdies.backend;

import com.neverdies.backend.model.accesorios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class AccesoriosService {
    private final com.neverdies.backend.AccesoriosRepository accesoriosRepository;
    @Autowired // el que inyecta las clases
    public AccesoriosService (com.neverdies.backend.AccesoriosRepository accesoriosRepository){
        this.accesoriosRepository=accesoriosRepository;
    }// constructor

    public List<accesorios> getAllProductos(){
        return accesoriosRepository.findAll();
    }// get all products

    public accesorios getProductos (Long id){
        return accesoriosRepository.findById(id).orElseThrow(()-> new IllegalStateException("El producto cone le id" +id +"no existe"));
    }// get products

    public void deleteProductos (Long id){
        if (accesoriosRepository.existsById(id)){
            accesoriosRepository.deleteById(id);
        }else {
            throw new IllegalStateException("EL producto con el id" +id +"no exite");
        }// else
    }// delete products

    @Transactional
    public void  updateProductos (Long id, String nombre, String descripcion, String imagen, double precio, String color,
                                  String talla, String tipo, double cantidad){
        accesorios accesorios= accesoriosRepository.findById(id).orElseThrow(()-> new IllegalStateException("El producto con el id" +id+ "no existe"));
}//class ProductosService
