package org.polytech.covid.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class VaccinationCenter {
    @Id
    private Integer id;
    private String name;

    private String address;
    private String city;

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAddress() 
    { 
        return address; 
    }

    public String getCity() {
        return city;
    }

    public void setName(String name) 
    { 
        this.name = name; 
    }

    public void setAddress(String address) 
    { 
        this.address = address; 
    }

    public void setCity(String city) 
    { 
        this.city = city; 
    }

}
