package org.polytech.covid.web;

import java.util.List;

import org.polytech.covid.domain.User;
import org.polytech.covid.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    
    @Autowired
    private UserService userService;

    @GetMapping(path = "/api/admin/users")
    public List<User> getAll() {
        return userService.findAll();
    }

    @GetMapping(path = "/api/admin/user/{id}")
    public User getById(@PathVariable("id") Integer id) {
        return userService.findById(id);
    }

    @GetMapping(path = "/api/admin/users/center/{id}")
    public List<User> getByVaccinationCenterId(@PathVariable("id") Integer id) {
        return userService.findByVaccinationCenterId(id);
    }

    @RequestMapping(path = "/api/admin/user/create", method = RequestMethod.POST)
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @RequestMapping(path = "/api/admin/user/update", method = RequestMethod.POST)
    public void updateUser(@RequestBody User user) {
        userService.updateUser(user);
    }

    @RequestMapping(path = "/api/admin/user/delete/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable("id") Integer id) {
        userService.deleteUser(id);
    }
}
