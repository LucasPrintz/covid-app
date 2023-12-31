package org.polytech.covid.repository;

import java.util.List;

import org.polytech.covid.domain.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer>
{
    public List<Reservation> findByPatientId(Integer id);
    public List<Reservation> findByVaccinationCenterId(Integer id);
}
