package org.polytech.covid.web;

import java.util.List;

import org.polytech.covid.domain.VaccinationCenter;
import org.polytech.covid.service.VaccinationCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VaccinationCenterController {
    
    @Autowired
    private VaccinationCenterService vaccinationCenterService;

    @GetMapping(path = "/api/public/centers")
    public List<VaccinationCenter> getAll() {
        return vaccinationCenterService.findAll();
    }

    @GetMapping(path = "/api/public/center/{id}")
    public VaccinationCenter getById(@PathVariable("id") Integer id) {
        return vaccinationCenterService.findById(id);
    }

    @GetMapping(path = "/api/public/centers/getByCity{city}")
    public List<VaccinationCenter> get(@PathVariable("city") String city) {
        return vaccinationCenterService.findAllByCity(city);
    }

    @PostMapping(path = "/api/admin/center/create")
    public void addVaccinationCenter(@RequestBody VaccinationCenter vaccinationCenter) {
        vaccinationCenterService.addVaccinationCenter(vaccinationCenter);
    }

    @PostMapping(path = "/api/admin/center/update")
    public void updateVaccinationCenter(@RequestBody VaccinationCenter vaccinationCenter) {
        vaccinationCenterService.updateVaccinationCenter(vaccinationCenter);
    }

    @RequestMapping(path = "/api/admin/center/delete/{id}", method = RequestMethod.DELETE)
    public void deleteVaccinationCenter(@PathVariable("id") Integer id) {
        vaccinationCenterService.deleteVaccinationCenter(id);
    }
}
