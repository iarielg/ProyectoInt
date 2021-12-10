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

    public void addProductos (accesorios accesorios){
        Optional<accesorios> prodByName= accesoriosRepository.findByName(accesorios.getNombre());
        if(prodByName.isPresent()){
            throw new IllegalStateException("El producto con el nombre [" + accesorios.getNombre() + "] ya existe");
        }//is present
        accesoriosRepository.save(accesorios);
    }// ad product

    @Transactional
    public void  updateProductos (Long id, String descripcion, String imagen, double precio, String color,
                                  String talla, String genero){
        accesorios accesorios= accesoriosRepository.findById(id).orElseThrow(()-> new IllegalStateException("El producto con el id" +id+ "no existe"));
        if(descripcion != null)
            if((!descripcion.isEmpty()) && (!descripcion.equals(accesorios.getDescripcion())) ){
                accesorios.setDescripcion(descripcion);
            }// if descripcion

        if((imagen !=null))
            if((!imagen.isEmpty()) && (!imagen.equals(accesorios.getImagen())) ){
                accesorios.setDescripcion(imagen);
            }// if imagenURL

        if ((precio>0) && (precio!=accesorios.getPrecio())){
            accesorios.setPrecio(precio);
        }// precio >0

        if((color !=null))
            if((!color.isEmpty()) && (!color.equals(accesorios.getColor())) ){
                accesorios.setDescripcion(color);
            }// if color

        if((talla !=null))
            if((!talla.isEmpty()) && (!talla.equals(accesorios.getTalla())) ){
                accesorios.setDescripcion(talla);
            }// if talla

        if((genero !=null))
            if((!genero.isEmpty()) && (!genero.equals(accesorios.getGenero())) ){
                accesorios.setDescripcion(genero);
            }// if imagenURL
    }//update products
}//class ProductosService
