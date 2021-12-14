package com.neverdies.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "accesorios")
public class accesorios {//POJO´s
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Long id;
    private String nombre;
    private double precio;
    private String color;
    private String talla;
    private String tipo;
    private double cantidad;

    public accesorios(Long id, String nombre, String descripcion, String imagen, double precio, String color, String talla, String tipo, double cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
        this.talla = talla;
        this.tipo = tipo;
        this.cantidad = cantidad;
    }//constructor
    public accesorios(){}//constructor vacio

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
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

}//classProductos
