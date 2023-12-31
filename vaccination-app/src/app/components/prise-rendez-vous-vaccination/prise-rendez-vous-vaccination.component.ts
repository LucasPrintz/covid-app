import { Component } from '@angular/core';
import { VaccinationCenter } from '../../entities/vaccination-center';
import { Patient } from '../../entities/patient';
import { ActivatedRoute } from '@angular/router';
import { VaccinationCenterService } from '../../services/vaccination-center.service';
import { PatientService } from '../../services/patient.service';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../entities/reservation';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-prise-rendez-vous-vaccination',
  templateUrl: './prise-rendez-vous-vaccination.component.html',
  styleUrls: ['./prise-rendez-vous-vaccination.component.scss']
})

export class PriseRendezVousVaccinationComponent {
  MOBILE_PATTERN = /^[0-9]{10}$/;
  currentDate = new Date();

  prenom = new FormControl('', [Validators.required]);
  nom = new FormControl('', [Validators.required]);
  mail = new FormControl('', [Validators.required, Validators.email]);
  telephone = new FormControl('', [Validators.required, Validators.pattern(this.MOBILE_PATTERN)]);
  date = new FormControl(this.currentDate, [Validators.required]);

  form: FormGroup = new FormGroup({
    prenom: this.prenom,
    nom: this.nom,
    mail: this.mail,
    telephone: this.telephone,
    date: this.date
  });

  center!: VaccinationCenter;

  patient!: Patient;

  dateRendezVous!: Date;

  reservation!: Reservation;

  isReserved = false;

  constructor(private route: ActivatedRoute, private location: Location, private patientService: PatientService, private vaccinationCenterService: VaccinationCenterService, private reservationService: ReservationService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vaccinationCenterService.getVaccinationCenterById(id)?.subscribe(center => this.center = center);
    this.patient = {id: 0, firstName: "", lastName: "", mail: "", phoneNumber: ""};
    this.dateRendezVous = new Date();
  }

  reserver() : void {
    console.log(this.form.get('prenom'));
    if (this.form.valid) {
      this.patient.firstName = this.form.get('prenom')!.value;
      this.patient.lastName = this.form.get('nom')!.value;
      this.patient.mail = this.form.get('mail')!.value;
      this.patient.phoneNumber = this.form.get('telephone')!.value;
      this.dateRendezVous = new Date(this.form.get('date')!.value);
      this.patientService.createPatient(this.patient).subscribe(patient => {
        this.patientService.getPatientByMail(this.patient.mail).subscribe(pat => {
          this.patient = pat;
          this.reservation = {id: 0, patient: pat, vaccinationCenter: this.center, date: new Date(this.dateRendezVous).toISOString().split("T")[0], isVaccinated: false};
          this.reservationService.createReservation(this.reservation).subscribe(reservation => {
            this.reservation = reservation
            this.isReserved = true;
            setTimeout(() => {
              this.location.back();
            }, 3000);
          });
        });
      });
    }
  }

  back(): void {
    this.location.back();
  }
}
