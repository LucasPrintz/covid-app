package org.polytech.covid.model.response;

import org.polytech.covid.domain.AccessEnum;
import org.polytech.covid.domain.VaccinationCenter;

public class LoginResponse {
    private Integer id;
    private String mail;
    private String token;
    private AccessEnum access;
    private String firstName;
    private String lastName;
    private VaccinationCenter vaccinationCenter;

    public LoginResponse(Integer id, String mail, String token, AccessEnum access, String firstName, String lastName, VaccinationCenter vaccinationCenter) {
        this.id = id;
        this.mail = mail;
        this.token = token;
        this.access = access;
        this.firstName = firstName;
        this.lastName = lastName;
        this.vaccinationCenter = vaccinationCenter;
    }

    public Integer getId(){
        return id;
    }

    public String getMail(){
        return mail;
    }

    public String getToken(){
        return token;
    }

    public AccessEnum getAccess(){
        return access;
    }

    public String getFirstName(){
        return firstName;
    }

    public String getLastName(){
        return lastName;
    }

    public VaccinationCenter getVaccinationCenter(){
        return vaccinationCenter;
    }

    public void setMail(String mail){
        this.mail = mail;
    }

    public void setToken(String token){
        this.token = token;
    }

    public void setAccess(AccessEnum access){
        this.access = access;
    }

    public void setFirstName(String firstName){
        this.firstName = firstName;
    }

    public void setLastName(String lastName){
        this.lastName = lastName;
    }

    public void setVaccinationCenter(VaccinationCenter vaccinationCenter){
        this.vaccinationCenter = vaccinationCenter;
    }
}
