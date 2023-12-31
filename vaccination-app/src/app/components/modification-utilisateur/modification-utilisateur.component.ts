import { Component } from '@angular/core';
import { User } from '../../entities/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Location } from '@angular/common';
import { VaccinationCenter } from '../../entities/vaccination-center';
import { VaccinationCenterService } from '../../services/vaccination-center.service';
import { AccessEnum } from '../../entities/access-enum';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-modification-utilisateur',
  templateUrl: './modification-utilisateur.component.html',
  styleUrls: ['./modification-utilisateur.component.scss']
})
export class ModificationUtilisateurComponent {

  user!: User;

  defaultCenter!: VaccinationCenter;

  defaultAccess!: AccessEnum;

  prenom: FormControl = new FormControl('', [Validators.required]);
  nom: FormControl = new FormControl('', [Validators.required]);
  mail: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', [Validators.required, Validators.min(5)]);
  access: FormControl = new FormControl('', [Validators.required]);
  vaccinationCenter: FormControl = new FormControl('');

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
  isModificationFailed = false;
  errorMessage = '';

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private vaccinationCenterService: VaccinationCenterService, private userService: UserService, private storageService: StorageService) { }

  ngOnInit(): void {
    if(!this.storageService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
    else if(this.storageService.getUser().access === AccessEnum.MEDECIN){
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
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(id).subscribe(user => {
      this.user = user;
      this.defaultCenter = user.vaccinationCenter!;
      this.defaultAccess = user.access;
      this.prenom = new FormControl(this.user.firstName, [Validators.required]);
      this.nom = new FormControl(this.user.lastName, [Validators.required]);
      this.mail = new FormControl(this.user.mail, [Validators.required, Validators.email]);
      this.password = new FormControl(this.user.password, [Validators.required, Validators.min(5)]);
      this.access = new FormControl(this.user.access, [Validators.required]);
      this.vaccinationCenter = new FormControl(this.user.vaccinationCenter);
    
      this.form.reset({prenom: this.prenom, nom: this.nom, mail: this.mail, password: this.password, access: this.access, vaccinationCenter: this.vaccinationCenter});
    });
  }

  back(): void {
    this.location.back();
  }

  onSubmit(): void {
    this.user.firstName = this.form.get('prenom')!.value.value;
    this.user.lastName = this.form.get('nom')!.value.value;
    this.user.mail = this.form.get('mail')!.value.value;
    this.user.password = this.form.get('password')!.value.value;
    this.user.access = this.form.get('access')!.value.value;
    this.user.vaccinationCenter = this.form.get('vaccinationCenter')!.value.value;
    this.userService.updateUser(this.user).subscribe({
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

  deleteUser(id: number): void {
    if(confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
      this.userService.deleteUser(id).subscribe(
        () => {
          this.location.back();
        }
      );
    }
  }
}
