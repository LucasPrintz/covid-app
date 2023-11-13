package org.polytech.covid.service;

import java.util.List;

import org.polytech.covid.domain.Client;
import org.polytech.covid.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {
    
    @Autowired
    private ClientRepository clientRepository;
    
    public List<Client> findAllByFirstNameOrLastName(String lastName) {
        return clientRepository.findAllByFirstNameOrLastName(lastName);
    }

    public List<Client> findAll() {
        return clientRepository.findAll();
    }
}
