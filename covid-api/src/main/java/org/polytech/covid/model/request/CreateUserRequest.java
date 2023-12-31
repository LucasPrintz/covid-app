package org.polytech.covid.model.request;

import org.polytech.covid.domain.AccessEnum;

import jakarta.validation.constraints.*;

public class CreateUserRequest {
    @NotBlank
    @Email
    private String mail;

    private AccessEnum access;

    @NotBlank
    @Size(min = 5, max = 20)
    private String password;
    
    public String getMail(){
        return mail;
    }

    public AccessEnum getAccess(){
        return access;
    }

    public String getPassword(){
        return password;
    }

    public void setMail(String mail){
        this.mail = mail;
    }

    public void setAccess(AccessEnum access){
        this.access = access;
    }

    public void setPassword(String password){
        this.password = password;
    }
    
}
