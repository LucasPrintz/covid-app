package org.polytech.covid.model.request;

public class LoginRequest {
    private String mail;
    private String password;

    public String getMail(){
        return mail;
    }

    public String getPassword(){
        return password;
    }

    public void setMail(String mail){
        this.mail = mail;
    }

    public void setPassword(String password){
        this.password = password;
    }
    
}
