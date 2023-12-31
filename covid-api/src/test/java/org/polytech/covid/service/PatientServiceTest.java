package org.polytech.covid.service;

import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.polytech.covid.domain.Patient;
import org.polytech.covid.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
public class PatientServiceTest {
    @TestConfiguration
    static class PatientServiceTestContextConfiguration {

        @Bean
        public PatientService patientService() {
            return new PatientService();
        }
    }

    private static final Integer ID = 1;
    private static final String FIRST_NAME = "firstNameTest";
    private static final String LAST_NAME = "lastNameTest";
    private static final String MAIL = "mailTest@test.fr";
    private static final String PHONE_NUMBER = "0123456789";

    @Autowired
    private PatientService patientService;

    @MockBean
    private PatientRepository patientRepository;

    @BeforeEach
    public void setUp() {
        patientService = Mockito.mock(PatientService.class);
    }

    @Test
    public void findByMailTest() {
        Patient patient = new Patient();
        patient.setMail(MAIL);
        Mockito.doReturn(patient).when(patientService).findByMail(MAIL);

        Patient found = patientService.findByMail(MAIL);
        Assertions.assertThat(found.getMail()).isEqualTo(MAIL);
    } 

    @Test
    public void findByIdTest() {
        Patient patient = new Patient();
        patient.setId(ID);
        Mockito.doReturn(patient).when(patientService).findById(ID);

        Patient found = patientService.findById(ID);
        Assertions.assertThat(found.getId()).isEqualTo(ID);

    }

    @Test
    public void findByLastNameTest() {
        Patient patient = new Patient();
        patient.setLastName(LAST_NAME);
        Mockito.doReturn(List.of(patient)).when(patientService).findByLastName(LAST_NAME);

        List<Patient> found = patientService.findByLastName(LAST_NAME);
        Assertions.assertThat(found.get(0).getLastName()).isEqualTo(LAST_NAME);
    }

    @Test
    public void addPatientTest() {
        Patient patient = new Patient();
        patient.setFirstName(FIRST_NAME);
        patient.setLastName(LAST_NAME);
        patient.setMail(MAIL);
        patient.setPhoneNumber(PHONE_NUMBER);
        Mockito.doReturn(patient).when(patientService).addPatient(patient);

        Patient found = patientService.addPatient(patient);
        Assertions.assertThat(found.getFirstName()).isEqualTo(FIRST_NAME);
        Assertions.assertThat(found.getLastName()).isEqualTo(LAST_NAME);
        Assertions.assertThat(found.getMail()).isEqualTo(MAIL);
        Assertions.assertThat(found.getPhoneNumber()).isEqualTo(PHONE_NUMBER);
    }

    @Test
    public void deletePatientTest() {
        patientService.deletePatient(ID);
        Mockito.verify(patientService, Mockito.times(1)).deletePatient(ID);
    }

}
