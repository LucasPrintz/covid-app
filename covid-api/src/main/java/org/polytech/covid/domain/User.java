package org.polytech.covid.domain;

import io.micrometer.common.lang.Nullable;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "utilisateur")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(unique = true, name="mail")
    private String mail;

    @Column(name="password")
    private String password;

    @ManyToOne
    @JoinColumn(name = "vaccination_center_id")
    private VaccinationCenter vaccinationCenter;

    @Column(name="access")
    private AccessEnum access;

    public User() {
    }

    public User(String mail, String password, AccessEnum access) {
        this.mail = mail;
        this.password = password;
        this.access = access;
    }

    public User(String firstName, String lastName, String mail, String password, AccessEnum access) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
        this.password = password;
        this.access = access;
    }

    public User(String firstName, String lastName, String mail, String password, VaccinationCenter vaccinationCenter, AccessEnum access) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
        this.password = password;
        this.vaccinationCenter = vaccinationCenter;
        this.access = access;
    }

    public Integer getId() {
        return id;
    }

    public String getMail() {
        return mail;
    }

    public String getPassword() {
        return password;
    }

    public String getFirstName() 
    { 
        return firstName; 
    }

    public String getLastName() 
    { 
        return lastName; 
    }

    public VaccinationCenter getVaccinationCenter() 
    { 
        return vaccinationCenter; 
    }

    public AccessEnum getAccess() 
    { 
        return access; 
    }

    public void setId(Integer id) 
    { 
        this.id = id; 
    }

    public void setMail(String mail) 
    { 
        this.mail = mail; 
    }

    public void setPassword(String password) 
    { 
        this.password = password;
    }

    public void setFirstName(String firstName) 
    { 
        this.firstName = firstName; 
    }

    public void setLastName(String lastName) 
    { 
        this.lastName = lastName; 
    }

    public void setVaccinationCenter(VaccinationCenter vaccinationCenter) 
    { 
        this.vaccinationCenter = vaccinationCenter; 
    }

    public void setAccess(AccessEnum access) 
    { 
        this.access = access; 
    }
}
