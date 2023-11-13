import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchVaccinationCenterComponent } from './search-vaccination-center/search-vaccination-center.component';
import { PriseRendezVousVaccinationComponent } from './prise-rendez-vous-vaccination/prise-rendez-vous-vaccination.component';
import { ConfirmationRendezVousVaccinationComponent } from './confirmation-rendez-vous-vaccination/confirmation-rendez-vous-vaccination.component';

const routes: Routes = [
  { path: 'search-vaccination-center', component: SearchVaccinationCenterComponent },
  { path: 'prise-rendez-vous-vaccination/:id', component: PriseRendezVousVaccinationComponent },
  { path: 'confirmation-rendez-vous-vaccination/:id', component: ConfirmationRendezVousVaccinationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
