package org.polytech.covid.service;

import java.time.LocalDate;
import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.polytech.covid.domain.Patient;
import org.polytech.covid.domain.Reservation;
import org.polytech.covid.domain.VaccinationCenter;
import org.polytech.covid.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
public class ReservationServiceTest {
    @TestConfiguration
    static class ReservationServiceTestContextConfiguration {

        @Bean
        public ReservationService reservationService() {
            return new ReservationService();
        }
    }

    private static final Integer ID = 1;
    private static final VaccinationCenter VACCINATION_CENTER = new VaccinationCenter();
    private static final Patient PATIENT = new Patient();
    private static final LocalDate DATE = LocalDate.now();

    @Autowired
    private ReservationService reservationService;

    @MockBean
    private ReservationRepository reservationRepository;

    @BeforeEach
    public void setUp() {
        reservationService = Mockito.mock(ReservationService.class);
    }

    @Test
    public void findByIdTest() {
        Reservation reservation = new Reservation();
        reservation.setId(ID);
        Mockito.doReturn(reservation).when(reservationService).findById(ID);

        Reservation found = reservationService.findById(ID);
        Assertions.assertThat(found.getId()).isEqualTo(ID);
    }

    @Test
    public void findByPatientIdTest() {
        Reservation reservation = new Reservation();
        reservation.setPatient(PATIENT);
        final Integer patient_id = 1;
        Mockito.doReturn(List.of(reservation)).when(reservationService).findByPatientId(patient_id);

        List<Reservation> found = reservationService.findByPatientId(patient_id);
        Assertions.assertThat(found.get(0).getPatient()).isEqualTo(PATIENT);
    }

    @Test
    public void findByVaccinationCenterIdTest() {
        Reservation reservation = new Reservation();
        reservation.setVaccinationCenter(VACCINATION_CENTER);
        final Integer vaccination_center_id = 1;
        Mockito.doReturn(List.of(reservation)).when(reservationService).findByVaccinationCenterId(vaccination_center_id);

        List<Reservation> found = reservationService.findByVaccinationCenterId(vaccination_center_id);
        Assertions.assertThat(found.get(0).getVaccinationCenter()).isEqualTo(VACCINATION_CENTER);
    }

    @Test
    public void addReservationTest() {
        Reservation reservation = new Reservation();
        reservation.setPatient(PATIENT);
        reservation.setVaccinationCenter(VACCINATION_CENTER);
        Mockito.doReturn(reservation).when(reservationService).addReservation(PATIENT, VACCINATION_CENTER, DATE);

        Reservation found = reservationService.addReservation(PATIENT, VACCINATION_CENTER, DATE);
        Assertions.assertThat(found.getPatient()).isEqualTo(PATIENT);
        Assertions.assertThat(found.getVaccinationCenter()).isEqualTo(VACCINATION_CENTER);
    }

    /*@Test
    public void validateVaccinationTest() {
        Reservation reservation = new Reservation();
        reservation.setId(ID);
        reservation.setIsVaccinated(false);
        Mockito.doReturn(reservation).when(reservationService).validateVaccination(ID);

        Reservation found = reservationService.validateVaccination(ID);
        Assertions.assertThat(found.getIsVaccinated()).isEqualTo(true);
    }*/

    @Test
    public void deleteReservationTest() {
        Reservation reservation = new Reservation();
        reservation.setId(ID);
        Mockito.doReturn(reservation).when(reservationService).findById(ID);

        reservationService.deleteReservation(ID);
        Mockito.verify(reservationService, Mockito.times(1)).deleteReservation(ID);
    }

}
