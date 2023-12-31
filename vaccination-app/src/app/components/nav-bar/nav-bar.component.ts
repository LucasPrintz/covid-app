import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessEnum } from 'src/app/entities/access-enum';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isLoggedIn = false;

  access: AccessEnum | undefined;

  affiliatedCenterId = null;

  constructor(public router: Router, private authService: AuthService, private storageService: StorageService) { }
  
  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.affiliatedCenterId = this.storageService.getUser().vaccinationCenter?.id;
      this.access = this.storageService.getUser().access;
    }
  }

  logout(): void {
    this.authService.logout();
    this.storageService.clean();
    this.router.navigate(['/search-vaccination-center'])
      .then(() => {
        window.location.reload();
      });
  }
}
