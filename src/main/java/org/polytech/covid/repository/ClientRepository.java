package org.polytech.covid.repository;

import java.util.List;

import org.polytech.covid.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer>
{
    public List<Client> findAllByFirstNameOrLastName(String lastName);

    public List<Client> findAll();
}
