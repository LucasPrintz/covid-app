import { Component } from '@angular/core';
import { VaccinationCenter } from '../../entities/vaccination-center';
import { VaccinationCenterService } from '../../services/vaccination-center.service';
import { FormControl, FormGroup } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { AccessEnum } from 'src/app/entities/access-enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-centres',
  templateUrl: './gestion-centres.component.html',
  styleUrls: ['./gestion-centres.component.scss']
})
export class GestionCentresComponent {

  centers!: VaccinationCenter[];

  filteredCenters: VaccinationCenter[] = [];

  shownCenters: VaccinationCenter[] = [];

  searchText = new FormControl('');

  form: FormGroup = new FormGroup({
    searchText: this.searchText
  });

  showAll = false;

  selected?: VaccinationCenter;

  constructor(private router: Router, private storageService: StorageService, private vaccinationCenterService: VaccinationCenterService) { }

  ngOnInit(): void {
    if(!this.storageService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
    if(this.storageService.getUser().access !== AccessEnum.SUPERADMIN){
      this.router.navigate(['/search-vaccination-center']);
    }

    this.vaccinationCenterService.getVaccinationCenterList().subscribe(centers => {
      this.centers = centers;
      this.filteredCenters = centers;
      if(!this.showAll){
        this.shownCenters = centers.slice(0, 2);
      }
      else{
        this.shownCenters = this.filteredCenters;
      }
    });
  }

  filterCenters(): void {
    if(!this.searchText) {
      this.filteredCenters = this.centers;
    }
    this.filteredCenters = this.centers.filter(center => center?.city.toLowerCase().includes(this.form.get('searchText')!.value.toLowerCase()));
    this.showAll = false;
    this.shownCenters = this.filteredCenters.slice(0, 2);
  }

  showAllFilteredCenters(): void {
    this.showAll = true;
    this.shownCenters = this.filteredCenters;
  }
}
