import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }  from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchVaccinationCenterComponent } from './components/search-vaccination-center/search-vaccination-center.component';
import { PriseRendezVousVaccinationComponent } from './components/prise-rendez-vous-vaccination/prise-rendez-vous-vaccination.component';
import { GestionCentresComponent } from './components/gestion-centres/gestion-centres.component';
import { ModificationCentreComponent } from './components/modification-centre/modification-centre.component';
import { AjoutCentreComponent } from './components/ajout-centre/ajout-centre.component';
import { GestionPersonnelCentreComponent } from './components/gestion-personnel-centre/gestion-personnel-centre.component';
import { ModificationUtilisateurComponent } from './components/modification-utilisateur/modification-utilisateur.component';
import { GestionMedecinsCentreComponent } from './components/gestion-medecins-centre/gestion-medecins-centre.component';
import { GestionUtilisateursComponent } from './components/gestion-utilisateurs/gestion-utilisateurs.component';
import { PlanningCentreComponent } from './components/planning-centre/planning-centre.component';
import { httpInterceptorProviders } from './helpers/http-request.interceptor';
import { LoginComponent } from './components/login/login.component';
import { CreateUtilisateurComponent } from './components/create-utilisateur/create-utilisateur.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    SearchVaccinationCenterComponent,
    PriseRendezVousVaccinationComponent,
    GestionCentresComponent,
    ModificationCentreComponent,
    AjoutCentreComponent,
    GestionPersonnelCentreComponent,
    ModificationUtilisateurComponent,
    GestionMedecinsCentreComponent,
    LoginComponent,
    CreateUtilisateurComponent,
    NavBarComponent,
    GestionUtilisateursComponent,
    PlanningCentreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
