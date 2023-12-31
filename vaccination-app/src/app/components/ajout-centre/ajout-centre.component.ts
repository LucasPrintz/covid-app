import { Component } from '@angular/core';
import { VaccinationCenterService } from '../../services/vaccination-center.service';
import { Location } from '@angular/common';
import { VaccinationCenter } from '../../entities/vaccination-center';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { AccessEnum } from 'src/app/entities/access-enum';

@Component({
  selector: 'app-ajout-centre',
  templateUrl: './ajout-centre.component.html',
  styleUrls: ['./ajout-centre.component.scss']
})
export class AjoutCentreComponent {
  postCodePattern = '^[0-9]{5}$';

  nom = new FormControl('', [Validators.required]);
  adresse = new FormControl('', [Validators.required]);
  codePostal = new FormControl('', [Validators.required, Validators.pattern(this.postCodePattern)]);
  ville = new FormControl('', [Validators.required]);

  form: FormGroup = new FormGroup({
    nom: this.nom,
    adresse: this.adresse,
    codePostal: this.codePostal,
    ville: this.ville
  });


  
  isSuccesful = false;
  isCreationFailed = false;
  errorMessage = '';
  
  center: VaccinationCenter = {
    id: 0,
    name: '',
    address: '',
    postalCode: '',
    city: ''
  };

  constructor(private router: Router, private location: Location, private vaccinationCenterService: VaccinationCenterService, private storageService: StorageService) { }

  ngOnInit(): void {
    if(!this.storageService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
    if(this.storageService.getUser().access !== AccessEnum.SUPERADMIN){
      this.router.navigate(['/search-vaccination-center']);
    }
  }

  onSubmit(): void {
    const name = this.form.get('nom')!.value;
    const address = this.form.get('adresse')!.value;
    const postalCode = this.form.get('codePostal')!.value;
    const city = this.form.get('ville')!.value;
    this.center.name = name;
    this.center.address = address;
    this.center.postalCode = postalCode;
    this.center.city = city;
    this.vaccinationCenterService.createVaccinationCenter(this.center).subscribe({
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

  back(): void{
    this.location.back();
  }
}
