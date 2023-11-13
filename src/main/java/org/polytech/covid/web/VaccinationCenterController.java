package org.polytech.covid.web;

import java.util.List;

import org.polytech.covid.domain.VaccinationCenter;
import org.polytech.covid.service.VaccinationCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VaccinationCenterController {
    
    @Autowired
    private VaccinationCenterService vaccinationCenterService;

    @GetMapping(path = "/api/centers/{city}")
    public List<VaccinationCenter> get(@PathVariable("city") String city) {
        return vaccinationCenterService.findAllByCityLike(city);
    }

    @GetMapping(path = "api/centers")
    public List<VaccinationCenter> getAll() {
        return vaccinationCenterService.findAll();
    }
}
