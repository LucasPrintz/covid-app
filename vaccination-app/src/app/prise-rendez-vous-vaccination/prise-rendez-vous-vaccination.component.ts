import { Component, Inject, Injectable } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-prise-rendez-vous-vaccination',
  templateUrl: './prise-rendez-vous-vaccination.component.html',
  styleUrls: ['./prise-rendez-vous-vaccination.component.scss']
})
@Injectable({
  providedIn: 'root'
})

export class PriseRendezVousVaccinationComponent {

  centers: VaccinationCenter[] = [
    {id:1, name:"Hôpital Saint-Louis", address:"1 Avenue Claude Vellefaux", postalCode:"75010", city:"Paris", openingDate: new Date("2020-01-16")},
    {id:2, name:"Hôpital Saint-Antoine", address:"184 Rue du Faubourg Saint-Antoine", postalCode:"75012", city:"Paris", openingDate: new Date("2015-05-15")},
    {id:3, name:"Hôpital Rothschild", address:"33 Boulevard de Picpus", postalCode:"75012", city:"Paris", openingDate: new Date("2018-07-29")},
    {id:4, name:"Hôpital Central", address:"29 Avenue du Maréchal de Lattre de Tassigny", postalCode:"54000", city:"Nancy", openingDate: new Date("2021-06-19")},
    {id:5, name:"Grand centre de vaccination", address:"1 Rue du Docteur Heydenreich", postalCode:"54000", city:"Nancy", openingDate: new Date("2019-01-16")}
  ];

  center?: VaccinationCenter;
  utilisateur?: Utilisateur;

  constructor(
    @Inject('id') id: number,
  ) { 
    this.center = this.centers.find(center => center.id === id);
  }

  reservation(prenom: string, nom: string, email: string, dateRendezVous: string) : void {
    this.utilisateur = {prenom: prenom, nom: nom, email: email, dateRendezVous: new Date(dateRendezVous)};
  }
}
