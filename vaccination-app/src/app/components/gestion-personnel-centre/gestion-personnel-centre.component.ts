import { Component } from '@angular/core';
import { VaccinationCenter } from '../../entities/vaccination-center';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../entities/user';
import { VaccinationCenterService } from '../../services/vaccination-center.service';
import { StorageService } from 'src/app/services/storage.service';
import { AccessEnum } from 'src/app/entities/access-enum';

@Component({
  selector: 'app-gestion-personnel-centre',
  templateUrl: './gestion-personnel-centre.component.html',
  styleUrls: ['./gestion-personnel-centre.component.scss']
})
export class GestionPersonnelCentreComponent {
  center!: VaccinationCenter;

  users!: User[];

  displayedColumns: string[] = ['id', 'Name', 'Actions'];

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private vaccinationCenterService: VaccinationCenterService, private userService: UserService, private storageService: StorageService) { }

  ngOnInit(): void {
    if(!this.storageService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
    else if(this.storageService.getUser().access !== AccessEnum.SUPERADMIN){
      this.router.navigate(['/search-vaccination-center']);
    }
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vaccinationCenterService.getVaccinationCenterById(id)?.subscribe(center => this.center = center);
    this.userService.getUserListByVaccinationCenterId(id).subscribe(users => this.users = users);
  }
  
  back(): void{
    this.location.back();
  }

  getMedecins(): User[] {
    return this.users.filter(user => user.access === "MEDECIN");
  }

  getAdmins(): User[] {
    return this.users.filter(user => user.access === "ADMIN");
  }

  deletePersonnel(id: number): void {
    if(confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
      this.userService.deleteUser(id).subscribe();
      this.users = this.users.filter(user => user.id !== id);
    }
  }
}
