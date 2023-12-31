package org.polytech.covid.domain;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "centre_vaccination")
public class VaccinationCenter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name="name")
    private String name;

    @Column(name="address")
    private String address;

    @Column(name="city")
    private String city;

    @Column(name="postal_code")
    private String postalCode;

    public VaccinationCenter() {
    }

    public VaccinationCenter(String name, String city, String address, String postalCode) {
        this.name = name;
        this.city = city;
        this.address = address;
        this.postalCode = postalCode;
    }

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

    public String getPostalCode() 
    { 
        return postalCode; 
    }

    public String getCity() {
        return city;
    }

    public void setId(Integer id) 
    { 
        this.id = id; 
    }

    public void setName(String name) 
    { 
        this.name = name; 
    }

    public void setAddress(String address) 
    { 
        this.address = address; 
    }

    public void setPostalCode(String postalCode) 
    { 
        this.postalCode = postalCode; 
    }

    public void setCity(String city) 
    { 
        this.city = city; 
    }

}
