import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchVaccinationCenterComponent } from './components/search-vaccination-center/search-vaccination-center.component';
import { PriseRendezVousVaccinationComponent } from './components/prise-rendez-vous-vaccination/prise-rendez-vous-vaccination.component';
import { GestionCentresComponent } from './components/gestion-centres/gestion-centres.component';
import { ModificationCentreComponent } from './components/modification-centre/modification-centre.component';
import { AjoutCentreComponent } from './components/ajout-centre/ajout-centre.component';
import { GestionPersonnelCentreComponent } from './components/gestion-personnel-centre/gestion-personnel-centre.component';
import { ModificationUtilisateurComponent } from './components/modification-utilisateur/modification-utilisateur.component';
import { GestionMedecinsCentreComponent } from './components/gestion-medecins-centre/gestion-medecins-centre.component';
import { LoginComponent } from './components/login/login.component';
import { CreateUtilisateurComponent } from './components/create-utilisateur/create-utilisateur.component';
import { GestionUtilisateursComponent } from './components/gestion-utilisateurs/gestion-utilisateurs.component';
import { PlanningCentreComponent } from './components/planning-centre/planning-centre.component';

const routes: Routes = [
  { path: 'search-vaccination-center', component: SearchVaccinationCenterComponent },
  { path: 'prise-rendez-vous-vaccination/:id', component: PriseRendezVousVaccinationComponent },
  { path: 'gestion-centres', component: GestionCentresComponent },
  { path: 'gestion-utilisateurs', component: GestionUtilisateursComponent },
  { path: 'gestion-personnel-centre/:id', component: GestionPersonnelCentreComponent },
  { path: 'gestion-medecins-centre/:id', component: GestionMedecinsCentreComponent },
  { path: 'modification-utilisateur/:id', component: ModificationUtilisateurComponent},
  { path: 'ajout-centre', component: AjoutCentreComponent },
  { path: 'modification-centre/:id', component: ModificationCentreComponent },
  { path: 'planning-centre/:id', component: PlanningCentreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-utilisateur', component: CreateUtilisateurComponent },
  { path: '', redirectTo: 'search-vaccination-center', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
