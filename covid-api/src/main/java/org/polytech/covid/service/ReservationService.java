package org.polytech.covid.service;

import java.util.List;
import java.time.LocalDate;

import org.polytech.covid.domain.Patient;
import org.polytech.covid.domain.Reservation;
import org.polytech.covid.domain.VaccinationCenter;
import org.polytech.covid.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationService {
    
    @Autowired
    private ReservationRepository reservationRepository;

    public Reservation addReservation(Patient patient, VaccinationCenter vaccinationCenter, LocalDate date) {
        Reservation userVaccinationCenter = new Reservation(patient, vaccinationCenter, date);
        return reservationRepository.save(userVaccinationCenter);
    }

    public Reservation findById(Integer id) {
        return reservationRepository.findById(id).get();
    }

    public List<Reservation> findByPatientId(Integer id) {
        return reservationRepository.findByPatientId(id);
    }

    public List<Reservation> findByVaccinationCenterId(Integer id) {
        return reservationRepository.findByVaccinationCenterId(id);
    }

    public Reservation validateVaccination(Integer id) {
        Reservation reservation = reservationRepository.findById(id).get();
        reservation.setIsVaccinated(true);
        return reservationRepository.save(reservation);
    }

    public void addReservation(Reservation reservation) {
        reservationRepository.save(reservation);
    }

    public void deleteReservation(Integer id) {
        reservationRepository.deleteById(id);
    }
}
