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

    @Transactional
    public void  updateProductos (Long id, String descripcion, String imagen, double precio, String color,
            String talla,String tipo, String cantidad){
        productos producto= productosRepository.findById(id).orElseThrow(()-> new IllegalStateException("El producto con el id" +id+ "no existe"));
        if(descripcion != null)
            if((!descripcion.isEmpty()) && (!descripcion.equals(producto.getDescripcion())) ){
                producto.setDescripcion(descripcion);
            }// if descripcion

        if((imagen !=null))
            if((!imagen.isEmpty()) && (!imagen.equals(producto.getImagen())) ){
                producto.setDescripcion(imagen);
            }// if imagen

        if ((precio>0) && (precio!=producto.getPrecio())){
            producto.setPrecio(precio);
        }// precio >0

        if((color !=null))
            if((!color.isEmpty()) && (!color.equals(producto.getColor())) ){
                producto.setDescripcion(color);
            }// if color

        if((talla !=null))
            if((!talla.isEmpty()) && (!talla.equals(producto.getTalla())) ){
                producto.setDescripcion(talla);
            }// if talla
        if ((tipo !=null))
            if ((!tipo.isEmpty()) && (!tipo.equals(producto.getTipo())) ) {
            producto.setDescripcion(tipo);
        }//if tipo
        if ((cantidad !=null))
            if ((!cantidad.isEmpty()) && (!cantidad.equals(producto.getCantidad())) ){
                producto.setDescripcion(cantidad);
            }//if cantidad
    }//update products
}//class ProductosService
