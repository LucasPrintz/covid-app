import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/entities/patient';
import { Reservation } from 'src/app/entities/reservation';
import { VaccinationCenter } from 'src/app/entities/vaccination-center';
import { ReservationService } from 'src/app/services/reservation.service';
import { StorageService } from 'src/app/services/storage.service';
import { VaccinationCenterService } from 'src/app/services/vaccination-center.service';

@Component({
  selector: 'app-planning-centre',
  templateUrl: './planning-centre.component.html',
  styleUrls: ['./planning-centre.component.scss']
})
export class PlanningCentreComponent {
  center!: VaccinationCenter;

  reservation!: Reservation[];


  constructor(private router: Router, private route: ActivatedRoute, private reservationService: ReservationService, private vaccinationCenterService: VaccinationCenterService, private storageService: StorageService) {}

  ngOnInit(): void {
    if(!this.storageService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(this.storageService.getUser().access !== "SUPERADMIN" && this.storageService.getUser().vaccinationCenter.id !== id){
      this.router.navigate(['/search-vaccination-center']);
    }
    this.vaccinationCenterService.getVaccinationCenterById(id)?.subscribe(center =>{
      this.center = center;
      this.reservationService.getReservationListByVaccinationCenterId(id)?.subscribe(reservation => {
        this.reservation = reservation;
        this.reservation.sort((a, b) => (a.date > b.date) ? 1 : -1);
      });
    });
  }

  validateVaccination(id: number): void {
    if(confirm("Êtes-vous sûr de vouloir valider cette vaccination ?")) {
      this.reservationService.validateVaccination(id).subscribe();
      this.reservation.find(reservation => reservation.id === id)!.isVaccinated = true;
    }
  }

  deleteReservation(id: number): void {
    if(confirm("Êtes-vous sûr de vouloir supprimer cette réservation ?")) {
      this.reservationService.deleteReservation(id).subscribe();
      this.reservation = this.reservation.filter(reservation => reservation.id !== id);
    }
  }


}
