import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationRendezVousVaccinationComponent } from './confirmation-rendez-vous-vaccination.component';

describe('ConfirmationRendezVousVaccinationComponent', () => {
  let component: ConfirmationRendezVousVaccinationComponent;
  let fixture: ComponentFixture<ConfirmationRendezVousVaccinationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationRendezVousVaccinationComponent]
    });
    fixture = TestBed.createComponent(ConfirmationRendezVousVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
