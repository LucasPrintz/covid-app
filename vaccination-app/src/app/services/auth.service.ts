import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AccessEnum } from '../entities/access-enum';
import { VaccinationCenter } from '../entities/vaccination-center';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};  

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(mail: string, password: string) : Observable<any> {
    return this.http.post<any>("api/public/login", { mail, password }, httpOptions);
  }

  createUser(mail: string, password: string, firstName: string, lastName: string, access: AccessEnum, vaccinationCenter: VaccinationCenter) : Observable<any> {
      return this.http.post<any>("api/admin/user/create", { mail, password, firstName, lastName, access, vaccinationCenter }, httpOptions);
  }

  createUserWithoutCenter(mail: string, password: string, firstName: string, lastName: string, access: AccessEnum) : Observable<any> {
    return this.http.post<any>("api/admin/user/create", { mail, password, firstName, lastName, access }, httpOptions);
  }

  logout() : Observable<any> {
    return this.http.post<any>("api/public/logout", {}, httpOptions);
  }
}
