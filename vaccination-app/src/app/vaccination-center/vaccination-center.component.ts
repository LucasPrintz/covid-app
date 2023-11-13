import { Component, OnInit } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center';

@Component({
  selector: 'app-vaccination-center',
  templateUrl: './vaccination-center.component.html',
  styleUrls: ['./vaccination-center.component.scss']
})
export class VaccinationCenterComponent implements OnInit {
  center: VaccinationCenter = {
    id: 1,
    name: "Hôpital Saint-Louis",
    address: "1 Avenue Claude Vellefaux",
    postalCode: "75010",
    city: "Paris",
    openingDate: new Date("2020-01-16")
  };

  ngOnInit(): void {
      
  }
  
  isNameNotEmpty(){
    return this.center.name !== "";
  }

  clearName(){
    this.center.name = "";
  }
}
