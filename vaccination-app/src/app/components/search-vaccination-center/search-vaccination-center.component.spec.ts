import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVaccinationCenterComponent } from './search-vaccination-center.component';

describe('SearchVaccinationCenterComponent', () => {
  let component: SearchVaccinationCenterComponent;
  let fixture: ComponentFixture<SearchVaccinationCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchVaccinationCenterComponent]
    });
    fixture = TestBed.createComponent(SearchVaccinationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
