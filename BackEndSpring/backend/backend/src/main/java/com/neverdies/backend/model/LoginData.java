package com.neverdies.backend.model;




public class LoginData {
    private final String email;
    private final String password;

    public LoginData(String email, String password) {
        this.email = email;
        this.password = password;
    }// constructor

    public LoginData(){
        this.email = "";
        this.password = "";
    }//constructorVacio

    // solo getters porque solo queremos que nos traiga los datos


    public String getEmail() {
        return email;
    }// get email

    public String getPassword() {
        return password;
    }// get password
}//class LoginData
