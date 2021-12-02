package com.proyectoIntegrador.ndco.models;

public class products {
private int id;
private String nombre;
private int categoria;
private String talla;
private String genero;
private double precio;
private String color;
private String imagen;
private String descripcion;

    public products(int id, String nombre, int categoria, String talla, String genero, double precio, String color, String imagen, String descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.talla = talla;
        this.genero = genero;
        this.precio = precio;
        this.color = color;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }//constructor
    public products () {}
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getCategoria() {
        return categoria;
    }

    public void setCategoria(int categoria) {
        this.categoria = categoria;
    }

    public String getTalla() {
        return talla;
    }

    public void setTalla(String talla) {
        this.talla = talla;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}//class
