package org.polytech.covid.repository;

import java.util.List;

import org.polytech.covid.domain.VaccinationCenter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VaccinationCenterRepository extends JpaRepository<VaccinationCenter, Integer>
{
    public List<VaccinationCenter> findAllByCityLike(String city);

    public List<VaccinationCenter> findAll();
}
