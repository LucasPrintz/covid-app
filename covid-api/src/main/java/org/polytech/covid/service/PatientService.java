package org.polytech.covid.service;

import java.util.List;

import org.polytech.covid.domain.Patient;
import org.polytech.covid.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public Patient findById(Integer id) {
        return patientRepository.findById(id).get();
    }

    public Patient findByMail(String mail) {
        return patientRepository.findByMail(mail);
    }

    public List<Patient> findByLastName(String lastName) {
        return patientRepository.findByLastName(lastName);
    }

    public Patient addPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    public void deletePatient(Integer id) {
        patientRepository.deleteById(id);
    }
    
}
