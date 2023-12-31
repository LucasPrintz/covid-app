import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { Location } from '@angular/common';
import { VaccinationCenter } from 'src/app/entities/vaccination-center';
import { AccessEnum } from 'src/app/entities/access-enum';
import { VaccinationCenterService } from 'src/app/services/vaccination-center.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-utilisateur',
  templateUrl: './create-utilisateur.component.html',
  styleUrls: ['./create-utilisateur.component.scss']
})
export class CreateUtilisateurComponent {
  prenom = new FormControl('', [Validators.required]);
  nom = new FormControl('', [Validators.required]);
  mail = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.min(5)]);
  access = new FormControl('', [Validators.required]);
  vaccinationCenter = new FormControl('');

  form: FormGroup = new FormGroup({
    prenom: this.prenom,
    nom: this.nom,
    mail: this.mail,
    password: this.password,
    access: this.access,
    vaccinationCenter: this.vaccinationCenter
  });

  centers!: VaccinationCenter[];

  accesses!: AccessEnum[]; 

  hide = true;
  isSuccesful = false;
  isCreationFailed = false;
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService, private location: Location, private vaccinationCenterService: VaccinationCenterService, private storageService: StorageService) { }

  ngOnInit(): void {
    if(!this.storageService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
    if(this.storageService.getUser().access === AccessEnum.MEDECIN){
      this.router.navigate(['/search-vaccination-center']);
    }

    if(this.storageService.getUser().access === AccessEnum.SUPERADMIN){
      this.accesses = Object.values(AccessEnum);
      this.vaccinationCenterService.getVaccinationCenterList().subscribe(centers => this.centers = centers);
    }
    else if(this.storageService.getUser().access === AccessEnum.ADMIN){
      this.accesses = Object.values(AccessEnum).filter(access => access !== AccessEnum.SUPERADMIN && access !== AccessEnum.ADMIN);
      this.vaccinationCenterService.getVaccinationCenterList().subscribe(centers => this.centers = centers.filter(center => center.id === this.storageService.getUser().vaccinationCenter?.id));
    }
  }

  onSubmit(): void {
    const mail = this.form.get('mail')!.value;
    const password = this.form.get('password')!.value;
    const firstName = this.form.get('prenom')!.value;
    const lastName = this.form.get('nom')!.value;
    const access = this.form.get('access')!.value;
    const vaccinationCenter = this.form.get('vaccinationCenter')!.value;

    if(vaccinationCenter === ''){
      this.authService.createUserWithoutCenter(mail, password, firstName, lastName, access).subscribe({
        next: data => {
          this.isSuccesful = true;
          setTimeout(() => {
            this.location.back();
          }, 3000);
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isCreationFailed = true;
        }
      });
    }
    else{
      this.authService.createUser(mail, password, firstName, lastName, access, vaccinationCenter).subscribe({
        next: data => {
          this.isSuccesful = true;
          setTimeout(() => {
            this.location.back();
          }, 3000);
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isCreationFailed = true;
        }
      });
    }

  }

  back(): void {
    this.location.back();
  }
}
