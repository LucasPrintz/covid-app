package org.polytech.covid.repository;

import java.util.List;

import org.polytech.covid.domain.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer>
{
    public List<Patient> findByLastName(String lastName);
    public Patient findByMail(String mail);
}
