package org.polytech.covid.web;

import org.polytech.covid.auth.JwtUtil;
import org.polytech.covid.domain.AccessEnum;
import org.polytech.covid.domain.User;
import org.polytech.covid.domain.VaccinationCenter;
import org.polytech.covid.model.request.LoginRequest;
import org.polytech.covid.model.response.ErrorResponse;
import org.polytech.covid.model.response.LoginResponse;
import org.polytech.covid.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    
    private final AuthenticationManager authenticationManager;

    private JwtUtil jwtUtil;

    @Autowired
    private UserService userService;

    public AuthController(AuthenticationManager authenticationManager, JwtUtil jwtUtil) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }

    @ResponseBody
    @RequestMapping(path="/api/public/login", method = RequestMethod.POST)
    public ResponseEntity login(@RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getMail(), loginRequest.getPassword()));
            String mail = authentication.getName();
            User user = userService.findByMail(mail);
            String token = jwtUtil.generateJwtToken(user);
            AccessEnum access = user.getAccess();
            Integer id = user.getId();
            String firstName = user.getFirstName();
            String lastName = user.getLastName();
            VaccinationCenter vaccinationCenter = user.getVaccinationCenter();
            LoginResponse loginResponse = new LoginResponse(id, mail, token, access, firstName, lastName, vaccinationCenter);

            return ResponseEntity.ok(loginResponse);
        }
        catch (BadCredentialsException e) {
            ErrorResponse errorResponse = new ErrorResponse(HttpStatus.BAD_REQUEST, "Invalid mail or password");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
        catch (Exception e) {
            ErrorResponse errorResponse = new ErrorResponse(HttpStatus.BAD_REQUEST, e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }   
    }
}
