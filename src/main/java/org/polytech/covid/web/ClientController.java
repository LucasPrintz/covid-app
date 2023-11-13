package org.polytech.covid.web;

import java.util.List;

import org.polytech.covid.domain.Client;
import org.polytech.covid.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClientController {
    
    @Autowired
    private ClientService clientService;

    @GetMapping(path = "/api/clients/{lastName}")
    public List<Client> get(@PathVariable("lastName") String lastName) {
        return clientService.findAllByFirstNameOrLastName(lastName);
    }

    @GetMapping(path = "api/clients")
    public List<Client> getAll() {
        return clientService.findAll();
    }

}
