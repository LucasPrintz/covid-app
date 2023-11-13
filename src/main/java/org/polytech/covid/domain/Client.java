package org.polytech.covid.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Client {
    @Id
    private Integer id;

    private String mail;
    private String phoneNumber;

    private String firstName;
    private String lastName;

    private String date;

    private Boolean isVaccinated;

    public Integer getId() {
        return id;
    }

    public String getMail() {
        return mail;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getFirstName() 
    { 
        return firstName; 
    }

    public String getLastName() 
    { 
        return lastName; 
    }

    public String getDate() 
    { 
        return date; 
    }

    public Boolean getIsVaccinated() 
    { 
        return isVaccinated; 
    }

    public void setMail(String mail) 
    { 
        this.mail = mail; 
    }

    public void setPhoneNumber(String phoneNumber) 
    { 
        this.phoneNumber = phoneNumber; 
    }

    public void setFirstName(String firstName) 
    { 
        this.firstName = firstName; 
    }

    public void setLastName(String lastName) 
    { 
        this.lastName = lastName; 
    }

    public void setDate(String date) 
    { 
        this.date = date; 
    }

    public void setIsVaccinated(Boolean isVaccinated) 
    { 
        this.isVaccinated = isVaccinated; 
    }
}
