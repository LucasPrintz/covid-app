package org.polytech.covid.web;

import java.util.List;

import org.polytech.covid.domain.Reservation;
import org.polytech.covid.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReservationController {
    
    @Autowired
    private ReservationService reservationService;
    
    @PostMapping(path = "/api/public/reservation/create")
    public void addReservation(@RequestBody Reservation reservation) {
        reservationService.addReservation(reservation);
    }

    @RequestMapping(path = "/api/admin/reservation/{id}", method = RequestMethod.GET)
    public Reservation getById(@PathVariable("id") Integer id) {
        return reservationService.findById(id);
    }

    @RequestMapping(path = "/api/admin/reservations/patient/{id}", method = RequestMethod.GET)
    public List<Reservation> getByPatientId(@PathVariable("id") Integer id) {
        return reservationService.findByPatientId(id);
    }

    @RequestMapping(path = "/api/admin/reservations/center/{id}", method = RequestMethod.GET)
    public List<Reservation> getByVaccinationCenterId(@PathVariable("id") Integer id) {
        return reservationService.findByVaccinationCenterId(id);
    }

    @RequestMapping(path = "/api/admin/reservation/validate/{id}", method = RequestMethod.POST)
    public void validateVaccination(@PathVariable("id") Integer id) {
        reservationService.validateVaccination(id);
    }
    
    @RequestMapping(path = "/api/admin/reservation/delete/{id}", method = RequestMethod.DELETE)
    public void deleteReservation(@PathVariable("id") Integer id) {
        reservationService.deleteReservation(id);
    }
}
