import { Component } from '@angular/core';
import { VaccinationCenter } from '../../entities/vaccination-center';
import { VaccinationCenterService } from '../../services/vaccination-center.service';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-vaccination-center',
  templateUrl: './search-vaccination-center.component.html',
  styleUrls: ['./search-vaccination-center.component.scss']
})
export class SearchVaccinationCenterComponent {

  centers!: VaccinationCenter[];

  filteredCenters: VaccinationCenter[] = [];

  shownCenters: VaccinationCenter[] = [];

  searchText = new FormControl('');

  form: FormGroup = new FormGroup({
    searchText: this.searchText
  });

  showAll = false;

  selected?: VaccinationCenter;

  constructor(private vaccinationCenterService: VaccinationCenterService) { }

  ngOnInit(): void {
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
