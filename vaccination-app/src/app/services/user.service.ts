import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUserList() : Observable<User[]> {
    return this.httpClient.get<User[]>("api/admin/users");
  }

  getUserById(id: number) : Observable<User> {
    return this.httpClient.get<User>("api/admin/user/" + id);
  }

  getUserListByVaccinationCenterId(id: number) : Observable<User[]> {
    return this.httpClient.get<User[]>("api/admin/users/center/" + id);
  }
    

  createUser(user: User) : Observable<User> {
    return this.httpClient.post<User>("api/admin/user/create", user);
  }

  updateUser(user: User) : Observable<User> {
    return this.httpClient.post<User>("api/admin/user/update", user);
  }

  deleteUser(id: number) {
    return this.httpClient.delete("api/admin/user/delete/" + id);
  }
}
