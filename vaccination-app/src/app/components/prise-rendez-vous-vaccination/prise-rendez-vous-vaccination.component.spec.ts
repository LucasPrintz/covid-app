import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriseRendezVousVaccinationComponent } from './prise-rendez-vous-vaccination.component';

describe('PriseRendezVousVaccinationComponent', () => {
  let component: PriseRendezVousVaccinationComponent;
  let fixture: ComponentFixture<PriseRendezVousVaccinationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriseRendezVousVaccinationComponent]
    });
    fixture = TestBed.createComponent(PriseRendezVousVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
