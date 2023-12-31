import { Component } from '@angular/core';
import { User } from 'src/app/entities/user';
import { Location } from '@angular/common';
import { VaccinationCenterService } from 'src/app/services/vaccination-center.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AccessEnum } from 'src/app/entities/access-enum';

@Component({
  selector: 'app-gestion-utilisateurs',
  templateUrl: './gestion-utilisateurs.component.html',
  styleUrls: ['./gestion-utilisateurs.component.scss']
})
export class GestionUtilisateursComponent {
  users!: User[];

  displayedColumns: string[] = ['id', 'Name', 'Actions'];

  constructor(private router: Router, private location: Location, private vaccinationCenterService: VaccinationCenterService, private userService: UserService, private storageService: StorageService) { }

  ngOnInit(): void {
    if(!this.storageService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
    else if(this.storageService.getUser().access !== AccessEnum.SUPERADMIN){
      this.router.navigate(['/search-vaccination-center']);
    }
    this.userService.getUserList().subscribe(users => this.users = users);
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

  getSuperAdmins(): User[] {
    return this.users.filter(user => user.access === "SUPERADMIN");
  }

  deletePersonnel(id: number): void {
    if(confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
      this.userService.deleteUser(id).subscribe();
      this.users = this.users.filter(user => user.id !== id);
    }
  }
}
