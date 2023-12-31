package org.polytech.covid.service;

import java.util.List;

import org.polytech.covid.domain.AccessEnum;
import org.polytech.covid.domain.User;
import org.polytech.covid.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.rsocket.RSocketSecurity.AuthorizePayloadsSpec.Access;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {
    
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String mail) throws UsernameNotFoundException {
        User user = userRepository.findUserByMail(mail);
        AccessEnum access = AccessEnum.valueOf("MEDECIN");  
        UserDetails userDetails = org.springframework.security.core.userdetails.User.builder()
            .username(user.getMail())
            .password(user.getPassword())
            .roles(access.toString())
            .build();
        return userDetails;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(Integer id) {
        return userRepository.findById(id).get();
    }

    public User findByMail(String mail) {
        return userRepository.findUserByMail(mail);
    }

    public List<User> findByVaccinationCenterId(Integer id) {
        return userRepository.findByVaccinationCenterId(id);
    }

    public void addUser(User user) {
        userRepository.save(user);
    }

    public void updateUser(User user) {
        userRepository.save(user);
    }

    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }
}
