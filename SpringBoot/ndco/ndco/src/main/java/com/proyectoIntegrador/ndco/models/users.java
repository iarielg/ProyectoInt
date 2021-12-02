package com.proyectoIntegrador.ndco.models;

public class users {
    private int id;
    private String email;
    private String password;

    public users(int id, String email, String password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }//constructor
    public users () {}
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}//class
