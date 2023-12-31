import { Component } from '@angular/core';
import { VaccinationCenter } from '../../entities/vaccination-center';
import { User } from '../../entities/user';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccinationCenterService } from '../../services/vaccination-center.service';
import { UserService } from '../../services/user.service';
import { StorageService } from 'src/app/services/storage.service';
import { AccessEnum } from 'src/app/entities/access-enum';

@Component({
  selector: 'app-gestion-medecins-centre',
  templateUrl: './gestion-medecins-centre.component.html',
  styleUrls: ['./gestion-medecins-centre.component.scss']
})
export class GestionMedecinsCentreComponent {

  center!: VaccinationCenter;

  users!: User[];

  displayedColumns: string[] = ['id', 'Name', 'Actions'];

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private vaccinationCenterService: VaccinationCenterService, private userService: UserService, private storageService: StorageService) { }

  ngOnInit(): void {
    if(!this.storageService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(this.storageService.getUser().access === AccessEnum.MEDECIN || (this.storageService.getUser().access !== AccessEnum.SUPERADMIN && this.storageService.getUser()!.vaccinationCenter.id !== id)){
      this.router.navigate(['/search-vaccination-center']);
    }
    this.vaccinationCenterService.getVaccinationCenterById(id)?.subscribe(center => this.center = center);
    this.userService.getUserListByVaccinationCenterId(id).subscribe(users => this.users = users);
  }

  back(): void{
    this.location.back();
  }

  getMedecins(): User[] {
    return this.users.filter(user => user.access === "MEDECIN");
  }

  deletePersonnel(id: number): void {
    if(confirm("Êtes-vous sûr de vouloir supprimer ce médecin ?")) {
      this.userService.deleteUser(id).subscribe();
      this.users = this.users.filter(user => user.id !== id);
    }
  }
}
