import { Injectable } from '@angular/core';
import { VaccinationCenter } from '../entities/vaccination-center';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class VaccinationCenterService {

  constructor(private httpClient: HttpClient) { }

  getVaccinationCenterList() : Observable<VaccinationCenter[]> {
    return this.httpClient.get<VaccinationCenter[]>("api/public/centers");
  }

  getVaccinationCenterById(id: number) : Observable<VaccinationCenter> | undefined {
    return this.httpClient.get<VaccinationCenter>("api/public/center/" + id);
  }

  createVaccinationCenter(center: VaccinationCenter) : Observable<VaccinationCenter> {
    return this.httpClient.post<VaccinationCenter>("api/admin/center/create", center);
  }

  updateVaccinationCenter(center: VaccinationCenter) : Observable<VaccinationCenter> {
    return this.httpClient.post<VaccinationCenter>("api/admin/center/update", center);
  }

  deleteVaccinationCenter(id: number) {
    return this.httpClient.delete("api/admin/center/delete/" + id);
  }
}
