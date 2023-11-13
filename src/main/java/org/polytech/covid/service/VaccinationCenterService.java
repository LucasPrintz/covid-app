package org.polytech.covid.service;

import java.util.List;

import org.polytech.covid.domain.VaccinationCenter;
import org.polytech.covid.repository.VaccinationCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VaccinationCenterService {
    
    @Autowired
    private VaccinationCenterRepository vaccinationCenterRepository;

    public List<VaccinationCenter> findAllByCityLike(String cityName) {
        return vaccinationCenterRepository.findAllByCityLike(cityName);
    }

    public List<VaccinationCenter> findAll() {
        return vaccinationCenterRepository.findAll();
    }
}
