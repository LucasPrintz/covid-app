import { Component, Inject, Injectable } from '@angular/core';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-confirmation-rendez-vous-vaccination',
  templateUrl: './confirmation-rendez-vous-vaccination.component.html',
  styleUrls: ['./confirmation-rendez-vous-vaccination.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class ConfirmationRendezVousVaccinationComponent {

  utilisateur: Utilisateur;

  constructor(
    @Inject('utilisateur') aUtilisateur: Utilisateur
  ) { 
    this.utilisateur = aUtilisateur;
  }
}
