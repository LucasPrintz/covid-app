package org.polytech.covid.service;

import java.time.LocalDate;
import java.util.List;

import org.polytech.covid.domain.VaccinationCenter;
import org.polytech.covid.repository.VaccinationCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VaccinationCenterService {
    
    @Autowired
    private VaccinationCenterRepository vaccinationCenterRepository;

    public List<VaccinationCenter> findAll() {
        return vaccinationCenterRepository.findAll();
    }

    public VaccinationCenter findById(Integer id) {
        return vaccinationCenterRepository.findById(id).get();
    }

    public List<VaccinationCenter> findAllByCity(String cityName) {
        return vaccinationCenterRepository.findAllByCity(cityName);
    }

    public void addVaccinationCenter(VaccinationCenter vaccinationCenter) {
        vaccinationCenterRepository.save(vaccinationCenter);
    }

    public void updateVaccinationCenter(VaccinationCenter vaccinationCenter) {
        vaccinationCenterRepository.save(vaccinationCenter);
    }

    public void deleteVaccinationCenter(Integer id) {
        vaccinationCenterRepository.deleteById(id);
    }
}
