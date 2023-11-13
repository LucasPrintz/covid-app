import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import { FormsModule } from '@angular/forms';
import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import { SearchVaccinationCenterComponent } from './search-vaccination-center/search-vaccination-center.component';
import { PriseRendezVousVaccinationComponent } from './prise-rendez-vous-vaccination/prise-rendez-vous-vaccination.component';
import { ConfirmationRendezVousVaccinationComponent } from './confirmation-rendez-vous-vaccination/confirmation-rendez-vous-vaccination.component';

@NgModule({
  declarations: [
    AppComponent,
    VaccinationCenterComponent,
    VaccinationCenterListComponent,
    SearchVaccinationCenterComponent,
    PriseRendezVousVaccinationComponent,
    ConfirmationRendezVousVaccinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
