import { Component } from '@angular/core';
import { VaccinationCenter } from '../../entities/vaccination-center';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { VaccinationCenterService } from '../../services/vaccination-center.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { AccessEnum } from 'src/app/entities/access-enum';

@Component({
  selector: 'app-modification-centre',
  templateUrl: './modification-centre.component.html',
  styleUrls: ['./modification-centre.component.scss']
})
export class ModificationCentreComponent {
  nom!: FormControl;
  adresse!: FormControl;
  codePostal!: FormControl;
  ville!: FormControl;

  form!: FormGroup;

  postCodePattern = '^[0-9]{5}$';
  
  isSuccesful = false;
  isModificationFailed = false;
  errorMessage = '';
  
  center!: VaccinationCenter;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private vaccinationCenterService: VaccinationCenterService, private storageService: StorageService) { }

  ngOnInit(): void {
    if(!this.storageService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
    else if(this.storageService.getUser().access !== AccessEnum.SUPERADMIN){
      this.router.navigate(['/search-vaccination-center']);
    }
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vaccinationCenterService.getVaccinationCenterById(id)?.subscribe(center => {
      this.center = center
      this.nom = new FormControl(this.center.name, [Validators.required]);
      this.adresse = new FormControl(this.center.address, [Validators.required]);
      this.codePostal = new FormControl(this.center.postalCode, [Validators.required, Validators.pattern(this.postCodePattern)]);
      this.ville = new FormControl(this.center.city, [Validators.required]);
    
      this.form = new FormGroup({
        nom: this.nom,
        adresse: this.adresse,
        codePostal: this.codePostal,
        ville: this.ville
      });
    });
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
    this.vaccinationCenterService.updateVaccinationCenter(this.center).subscribe({
      next: data => {
        this.isSuccesful = true;
        setTimeout(() => {
          this.location.back();
        }, 3000);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isModificationFailed = true;
      }
    });
  }

  back(): void{
    this.location.back();
  }
}
