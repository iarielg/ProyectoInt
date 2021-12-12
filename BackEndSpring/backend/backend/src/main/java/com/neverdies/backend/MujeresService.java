package com.neverdies.backend;

import com.neverdies.backend.model.mujeres;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class MujeresService {
    private final com.neverdies.backend.MujeresRepository mujeresRepository;
    @Autowired // el que inyecta las clases
    public MujeresService (com.neverdies.backend.MujeresRepository mujeresRepository){
        this.mujeresRepository=mujeresRepository;
    }// constructor

    public List<mujeres> getAllProductos(){
        return mujeresRepository.findAll();
    }// get all products

    public mujeres getProductos (Long id){
        return mujeresRepository.findById(id).orElseThrow(()-> new IllegalStateException("El producto cone le id" +id +"no existe"));
    }// get products

    public void deleteProductos (Long id){
        if (mujeresRepository.existsById(id)){
            mujeresRepository.deleteById(id);
        }else {
            throw new IllegalStateException("EL producto con el id" +id +"no exite");
        }// else
    }// delete products

    public void addProductos (mujeres mujeres){
        Optional<mujeres> prodByName= mujeresRepository.findByName(mujeres.getNombre());
        if(prodByName.isPresent()){
            throw new IllegalStateException("El producto con el nombre [" + mujeres.getNombre() + "] ya existe");
        }//is present
        mujeresRepository.save(mujeres);
    }// ad product

    @Transactional
    public void  updateProductos (Long id, String descripcion, String imagen, double precio, String color,
                                  String talla, String tipo, String cantidad){
        mujeres mujeres= mujeresRepository.findById(id).orElseThrow(()-> new IllegalStateException("El producto con el id" +id+ "no existe"));
        if(descripcion != null)
            if((!descripcion.isEmpty()) && (!descripcion.equals(mujeres.getDescripcion())) ){
                mujeres.setDescripcion(descripcion);
            }// if descripcion

        if((imagen !=null))
            if((!imagen.isEmpty()) && (!imagen.equals(mujeres.getImagen())) ){
                mujeres.setDescripcion(imagen);
            }// if imagenURL

        if ((precio>0) && (precio!=mujeres.getPrecio())){
            mujeres.setPrecio(precio);
        }// precio >0

        if((color !=null))
            if((!color.isEmpty()) && (!color.equals(mujeres.getColor())) ){
                mujeres.setDescripcion(color);
            }// if color

        if((talla !=null))
            if((!talla.isEmpty()) && (!talla.equals(mujeres.getTalla())) ){
                mujeres.setDescripcion(talla);
            }// if talla
        if ((tipo !=null))
            if ((!tipo.isEmpty()) && (!tipo.equals(mujeres.getTipo())) ) {
            mujeres.setDescripcion(tipo);
        }//if tipo
        if ((cantidad !=null))
            if ((!cantidad.isEmpty()) && (!cantidad.equals(mujeres.getCantidad())) ){
                mujeres.setDescripcion(cantidad);
            }//if cantidad
    }//update products
}//class ProductosService
