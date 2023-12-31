import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../entities/reservation';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpClient) { }

  createReservation(reservation: Reservation) : Observable<Reservation> {
    return this.httpClient.post<Reservation>("api/public/reservation/create", reservation);
  }

  getReservationById(id: number) : Observable<Reservation> {
    return this.httpClient.get<Reservation>("api/admin/reservation/" + id);
  }

  getReservationListByVaccinationCenterId(id: number) : Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>("api/admin/reservations/center/" + id);
  }

  getReservationListByPatientId(id: number) : Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>("api/admin/reservations/patient/" + id);
  }

  validateVaccination(id: number) : Observable<Reservation> {
    return this.httpClient.post<Reservation>("api/admin/reservation/validate/" + id, {});
  }

  deleteReservation(id: number) {
    return this.httpClient.delete("api/admin/reservation/delete/" + id);
  }
}
