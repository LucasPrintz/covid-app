package org.polytech.covid;

import java.time.LocalDate;
import java.util.List;

import org.polytech.covid.domain.AccessEnum;
import org.polytech.covid.domain.Patient;
import org.polytech.covid.domain.Reservation;
import org.polytech.covid.domain.User;
import org.polytech.covid.domain.VaccinationCenter;
import org.polytech.covid.repository.PatientRepository;
import org.polytech.covid.repository.ReservationRepository;
import org.polytech.covid.repository.UserRepository;
import org.polytech.covid.repository.VaccinationCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class CovidApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(CovidApiApplication.class, args);
	}

	@Autowired
	VaccinationCenterRepository vaccinationCenterRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	PatientRepository patientRepository;

	@Autowired
	ReservationRepository reservationRepository;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Bean
	@ConditionalOnProperty(prefix = "app", name = "db.init.enabled", havingValue = "true")
	public CommandLineRunner initDatabase() {
		return args -> {
			VaccinationCenter vaccinationCenter1 = new VaccinationCenter("Hôpital Saint-Louis", "Paris", "1 Avenue Claude Vellefaux", "75010");
			VaccinationCenter vaccinationCenter2 = new VaccinationCenter("Hôpital Saint-Antoine", "Paris", "184 Rue du Faubourg Saint-Antoine", "75012");
			VaccinationCenter vaccinationCenter3 = new VaccinationCenter("Hôpital Rothschild", "Paris", "33 Boulevard de Picpus", "75012");
			VaccinationCenter vaccinationCenter4 = new VaccinationCenter("Hôpital Central", "Nancy", "29 Avenue du Maréchal de Lattre de Tassigny", "54000");
			VaccinationCenter vaccinationCenter5 = new VaccinationCenter("Grand centre de vaccination", "Nancy", "1 Rue du Docteur Heydenreich", "54000");

			vaccinationCenterRepository.saveAll(List.of(vaccinationCenter1, vaccinationCenter2, vaccinationCenter3, vaccinationCenter4, vaccinationCenter5));

			User user1 = new User("Paul", "Durand", "medecin@medecin", passwordEncoder.encode("medecin"), vaccinationCenter1, AccessEnum.MEDECIN);
			User user2 = new User("Julie", "Dubois", "Julie.Dubois@test.com", passwordEncoder.encode("medecin"), vaccinationCenter2, AccessEnum.MEDECIN);
			User user3 = new User("Pierre", "Lefebvre", "admin@admin",passwordEncoder.encode("admin"), vaccinationCenter1, AccessEnum.ADMIN);
			User user4 = new User("Sophie", "Moreau", "Sophie.Moreau@gmail.com", passwordEncoder.encode("admin"), vaccinationCenter2, AccessEnum.ADMIN);
			User user5 = new User("Luc", "Simon", "superadmin@superadmin", passwordEncoder.encode("admin"), null, AccessEnum.SUPERADMIN);

			userRepository.saveAll(List.of(user1, user2, user3, user4, user5));

			Patient patient1 = new Patient("John", "Doe", "patient@test.com", "0600000000");
			Patient patient2 = new Patient("Jane", "Doe", "patient2@test.com", "0600000001");
			Patient patient3 = new Patient("TestPatient", "TestPatient", "test@test", "0600000002");

			patientRepository.saveAll(List.of(patient1, patient2, patient3));

			Reservation reservation1 = new Reservation(patient1, vaccinationCenter1, LocalDate.of(2024, 5, 1));
			Reservation reservation2 = new Reservation(patient2, vaccinationCenter1, LocalDate.of(2024, 5, 2));
			Reservation reservation3 = new Reservation(patient3, vaccinationCenter1, LocalDate.of(2024, 5, 1));

			reservationRepository.saveAll(List.of(reservation1, reservation2, reservation3));

		};
	}

}
