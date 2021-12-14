package com.neverdies.backend.model;




public class LoginData {
    private final String password;

    public LoginData(String password) {
        this.password = password;
    }// constructor

    public LoginData(){
        this.password = "";
    }//constructorVacio

    // solo getters porque solo queremos que nos traiga los datos

    public String getPassword() {
        return password;
    }// get password
}//class LoginData
