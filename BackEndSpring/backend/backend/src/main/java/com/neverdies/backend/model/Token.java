package com.neverdies.backend.model;

public class Token {
    private final String accessToken;

    public Token(String accessToken) {
        this.accessToken = accessToken;
    }// constructor

    public String getAccessToken() {
        return accessToken;
    }// get access token
}//class Token
