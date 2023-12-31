import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Patient } from '../entities/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }

  createPatient(patient: Patient) : Observable<Patient> {
    return this.httpClient.post<Patient>("api/public/patient/create", patient);
  }

  getPatientById(id: number) : Observable<Patient> {
    return this.httpClient.get<Patient>("api/admin/patient/" + id);
  }

  getPatientByMail(mail: string) : Observable<Patient> {
    return this.httpClient.get<Patient>("api/public/patientByMail/" + mail);
  }

  getPatientListByLastName(lastName: string) : Observable<Patient[]> {
    return this.httpClient.get<Patient[]>("api/admin/patients/" + lastName);
  }

  updatePatient(patient: Patient) : Observable<Patient> {
    return this.httpClient.post<Patient>("api/admin/patient/update", patient);
  }

  deletePatient(id: number) {
    return this.httpClient.delete("api/admin/patient/delete/" + id);
  }
}
