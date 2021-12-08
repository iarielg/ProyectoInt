package com.proyectoIntegrador.ndco;

import com.proyectoIntegrador.ndco.models.products;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
@Service

public class ProductsService {
    public final ArrayList<products> lista = new ArrayList<products>();

    public ProductsService(){
        lista.add(new products(1, "gorra", 2,"M","H",100.00,"Azul","https://cnnodsnconocnoerwnocscewr.com","playera azul choclamino con detalles en fuchia"));
        lista.add(new products(2,"playera",1,"M","M", 100.00,"negro","https://frferfefr.com","playera azul choclamino con detalles en fuchia"));
    }//constructor
public List<products> getAllProduct(){return lista;}
    public products getProduct(Long productId){
        if (productId<=lista.size()){
            return lista.get((productId.intValue()-1));
        }
        return new products(0,"not found", 0, "not found", "not found",0.0, "not found", "not found", "not found");
    }//getProducts
public boolean deleteProduct(Long productId){
        boolean res=false;
        if (productId<=lista.size()){
            lista.remove(productId.intValue()-1);
                    res=true;
        }
        return res;
}//delete product

    public void updateProduct(Long productId, String originalNombre, String newNombre)
    {
        if (productId<= lista.size())
        {
            products product =lista.get((productId.intValue()-1));
            if (product.getNombre().equals(originalNombre)){
                product.setNombre(newNombre);
            }//ifOriginal
        }//ifproduct
    }//updateProduct
    public void addProduct(products product){lista.add(product);}

}//class
