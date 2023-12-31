import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vaccination-app';

  constructor(private http: HttpClient, private userService: UserService) { }
}
