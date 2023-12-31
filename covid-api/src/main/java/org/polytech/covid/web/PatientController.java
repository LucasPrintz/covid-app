package org.polytech.covid.web;

import java.util.List;

import org.polytech.covid.domain.Patient;
import org.polytech.covid.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PatientController {
    
    @Autowired
    private PatientService patientService;

    @RequestMapping(path = "/api/public/patient/create", method = RequestMethod.POST)
    public void addPatient(@RequestBody Patient patient) {
        patientService.addPatient(patient);
    }

    @GetMapping(path = "/api/admin/patient/{id}")
    public Patient getById(@PathVariable("id") Integer id) {
        return patientService.findById(id);
    }

    @GetMapping(path = "/api/public/patientByMail/{mail}")
    public Patient getByMail(@PathVariable("mail") String mail) {
        return patientService.findByMail(mail);
    }

    @GetMapping(path = "/api/admin/patients/{lastName}")
    public List<Patient> getByLastName(@PathVariable("lastName") String lastName) {
        return patientService.findByLastName(lastName);
    }

    @RequestMapping(path = "/api/admin/patient/delete/{id}", method = RequestMethod.DELETE)
    public void deletePatient(@PathVariable("id") Integer id) {
        patientService.deletePatient(id);
    }

    
}
