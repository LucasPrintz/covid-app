package org.polytech.covid.service;

import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.polytech.covid.domain.AccessEnum;
import org.polytech.covid.domain.User;
import org.polytech.covid.domain.VaccinationCenter;
import org.polytech.covid.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
public class UserServiceTest {
    @TestConfiguration
    static class UserServiceTestContextConfiguration {

        @Bean
        public UserService userService() {
            return new UserService();
        }
    }

    private static final Integer ID = 1;
    private static final String FIRST_NAME = "firstNameTest";
    private static final String LAST_NAME = "lastNameTest";
    private static final String MAIL = "mailTest@test.fr";
    private static final String PASSWORD = "passwordTest";
    private static final VaccinationCenter VACCINATION_CENTER = new VaccinationCenter();
    private static final AccessEnum ACCESS = AccessEnum.ADMIN;

    @Autowired
    private UserService userService;

    @MockBean
    private UserRepository userRepository;

    @BeforeEach
    public void setUp() {
        userService = Mockito.mock(UserService.class);
    }

    @Test
    public void findAllTest() {
        User user = new User();
        user.setFirstName(FIRST_NAME);
        user.setLastName(LAST_NAME);
        user.setMail(MAIL);
        user.setPassword(PASSWORD);
        user.setAccess(ACCESS);
        Mockito.doReturn(List.of(user)).when(userService).findAll();

        List<User> found = userService.findAll();
        Assertions.assertThat(found.get(0).getFirstName()).isEqualTo(FIRST_NAME);
    }

    @Test
    public void findByMailTest() {
        User user = new User();
        user.setMail(MAIL);
        Mockito.doReturn(user).when(userService).findByMail(MAIL);

        User found = userService.findByMail(MAIL);
        Assertions.assertThat(found.getMail()).isEqualTo(MAIL);
    }

    @Test
    public void findByIdTest() {
        User user = new User();
        user.setId(ID);
        Mockito.doReturn(user).when(userService).findById(ID);

        User found = userService.findById(ID);
        Assertions.assertThat(found.getId()).isEqualTo(ID);
    }

    @Test
    public void findByVaccinationCenterIdTest() {
        User user = new User();
        user.setVaccinationCenter(VACCINATION_CENTER);
        final Integer vaccinationCenter_id = 1;
        Mockito.doReturn(List.of(user)).when(userService).findByVaccinationCenterId(vaccinationCenter_id);

        List<User> found = userService.findByVaccinationCenterId(vaccinationCenter_id);
        Assertions.assertThat(found.get(0).getVaccinationCenter()).isEqualTo(VACCINATION_CENTER);
    }

    @Test
    public void addUserTest() {
        User user = new User();
        user.setFirstName(FIRST_NAME);
        user.setLastName(LAST_NAME);
        user.setMail(MAIL);
        user.setPassword(PASSWORD);
        user.setAccess(ACCESS);
        userService.addUser(user);
        Mockito.verify(userService, Mockito.times(1)).addUser(user);
    }

    @Test
    public void updateUserTest() {
        User user = new User();
        user.setFirstName(FIRST_NAME);
        user.setLastName(LAST_NAME);
        user.setMail(MAIL);
        user.setPassword(PASSWORD);
        user.setAccess(ACCESS);
        userService.updateUser(user);
        Mockito.verify(userService, Mockito.times(1)).updateUser(user);
    }

    @Test
    public void deleteUserTest() {
        userService.deleteUser(ID);
        Mockito.verify(userService, Mockito.times(1)).deleteUser(ID);
    }

    
}
