package org.polytech.covid.domain;

import java.time.LocalDate;

import org.springframework.cglib.core.Local;

import jakarta.annotation.Nullable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "reservation")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name="patient_id")
    private Patient patient;

    @ManyToOne
    @JoinColumn(name="vaccination_center_id")
    private VaccinationCenter vaccinationCenter;

    @Nullable
    @Column(name="date")
    private LocalDate date;

    @Column(name="is_vaccinated")
    private Boolean isVaccinated;

    public Reservation() {
    }


    public Reservation(Patient patient, VaccinationCenter vaccinationCenter, LocalDate date) {
        this.patient = patient;
        this.vaccinationCenter = vaccinationCenter;
        this.date = date;
        this.isVaccinated = false;
    }

    public Integer getId() {
        return id;
    }

    public Patient getPatient() {
        return patient;
    }

    public VaccinationCenter getVaccinationCenter() {
        return vaccinationCenter;
    }

    public LocalDate getDate() {
        return date;
    }

    public Boolean getIsVaccinated() {
        return isVaccinated;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public void setVaccinationCenter(VaccinationCenter vaccinationCenter) {
        this.vaccinationCenter = vaccinationCenter;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public void setIsVaccinated(Boolean isVaccinated) {
        this.isVaccinated = isVaccinated;
    }
}
