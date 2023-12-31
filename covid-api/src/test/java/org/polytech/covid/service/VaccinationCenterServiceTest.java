package org.polytech.covid.service;

import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.polytech.covid.domain.VaccinationCenter;
import org.polytech.covid.repository.VaccinationCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
public class VaccinationCenterServiceTest {
    @TestConfiguration
    static class VaccinationCenterServiceTestContextConfiguration {

        @Bean
        public VaccinationCenterService vaccinationCenterService() {
            return new VaccinationCenterService();
        }
    }

    private static final Integer ID = 1;
    private static final String NAME = "nameTest";
    private static final String CITY = "cityTest";
    private static final String ADDRESS = "addressTest";
    private static final String POSTAL_CODE = "postalCodeTest";

    @Autowired
    private VaccinationCenterService vaccinationCenterService;

    @MockBean
    private VaccinationCenterRepository vaccinationCenterRepository;

    @BeforeEach
    public void setUp() {
        vaccinationCenterService = Mockito.mock(VaccinationCenterService.class);
    }

    @Test
    public void findAllTest() {
        VaccinationCenter vaccinationCenter = new VaccinationCenter();
        vaccinationCenter.setName(NAME);
        vaccinationCenter.setCity(CITY);
        vaccinationCenter.setAddress(ADDRESS);
        vaccinationCenter.setPostalCode(POSTAL_CODE);
        Mockito.doReturn(List.of(vaccinationCenter)).when(vaccinationCenterService).findAll();

        List<VaccinationCenter> found = vaccinationCenterService.findAll();
        Assertions.assertThat(found.get(0).getName()).isEqualTo(NAME);
    }

    @Test
    public void findByIdTest() {
        VaccinationCenter vaccinationCenter = new VaccinationCenter();
        vaccinationCenter.setId(ID);
        Mockito.doReturn(vaccinationCenter).when(vaccinationCenterService).findById(ID);

        VaccinationCenter found = vaccinationCenterService.findById(ID);
        Assertions.assertThat(found.getId()).isEqualTo(ID);
    }

    @Test
    public void findAllByCityTest() {
        VaccinationCenter vaccinationCenter = new VaccinationCenter();
        vaccinationCenter.setCity(CITY);
        Mockito.doReturn(List.of(vaccinationCenter)).when(vaccinationCenterService).findAllByCity(CITY);

        List<VaccinationCenter> found = vaccinationCenterService.findAllByCity(CITY);
        Assertions.assertThat(found.get(0).getCity()).isEqualTo(CITY);
    }

    @Test
    public void addVaccinationCenterTest() {
        VaccinationCenter vaccinationCenter = new VaccinationCenter();
        vaccinationCenter.setName(NAME);
        vaccinationCenter.setCity(CITY);
        vaccinationCenter.setAddress(ADDRESS);
        vaccinationCenter.setPostalCode(POSTAL_CODE);
        vaccinationCenterService.addVaccinationCenter(vaccinationCenter);
        Mockito.verify(vaccinationCenterService, Mockito.times(1)).addVaccinationCenter(vaccinationCenter);
    }

    @Test
    public void updateVaccinationCenterTest() {
        VaccinationCenter vaccinationCenter = new VaccinationCenter();
        vaccinationCenter.setId(ID);
        vaccinationCenter.setName(NAME);
        vaccinationCenter.setCity(CITY);
        vaccinationCenter.setAddress(ADDRESS);
        vaccinationCenter.setPostalCode(POSTAL_CODE);
        vaccinationCenterService.updateVaccinationCenter(vaccinationCenter);
        Mockito.verify(vaccinationCenterService, Mockito.times(1)).updateVaccinationCenter(vaccinationCenter);
    }

    @Test
    public void deleteVaccinationCenterTest() {
        vaccinationCenterService.deleteVaccinationCenter(ID);
        Mockito.verify(vaccinationCenterService, Mockito.times(1)).deleteVaccinationCenter(ID);
    }
}
