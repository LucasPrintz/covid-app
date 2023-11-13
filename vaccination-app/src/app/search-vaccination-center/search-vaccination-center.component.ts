import { Component } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-vaccination-center',
  templateUrl: './search-vaccination-center.component.html',
  styleUrls: ['./search-vaccination-center.component.scss']
})
export class SearchVaccinationCenterComponent {

  centers: VaccinationCenter[] = [
    {id:1, name:"Hôpital Saint-Louis", address:"1 Avenue Claude Vellefaux", postalCode:"75010", city:"Paris", openingDate: new Date("2020-01-16")},
    {id:2, name:"Hôpital Saint-Antoine", address:"184 Rue du Faubourg Saint-Antoine", postalCode:"75012", city:"Paris", openingDate: new Date("2015-05-15")},
    {id:3, name:"Hôpital Rothschild", address:"33 Boulevard de Picpus", postalCode:"75012", city:"Paris", openingDate: new Date("2018-07-29")},
    {id:4, name:"Hôpital Central", address:"29 Avenue du Maréchal de Lattre de Tassigny", postalCode:"54000", city:"Nancy", openingDate: new Date("2021-06-19")},
    {id:5, name:"Grand centre de vaccination", address:"1 Rue du Docteur Heydenreich", postalCode:"54000", city:"Nancy", openingDate: new Date("2019-01-16")}
  ];

  filteredCenters: VaccinationCenter[] = [];

  constructor(private router: Router) { 
    this.filteredCenters = this.centers;
  }

  filterCenters(text: string): void {
    if(!text) {
      this.filteredCenters = this.centers;
    }
    this.filteredCenters = this.centers.filter(center => center?.city.toLowerCase().includes(text.toLowerCase()));
  }

  selectCenter(center: VaccinationCenter): void {
    this.router.navigate(['/prise-rendez-vous-vaccination', center.id]);
  }

}
