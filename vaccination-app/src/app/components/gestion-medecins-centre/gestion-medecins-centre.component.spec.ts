import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMedecinsCentreComponent } from './gestion-medecins-centre.component';

describe('GestionMedecinsCentreComponent', () => {
  let component: GestionMedecinsCentreComponent;
  let fixture: ComponentFixture<GestionMedecinsCentreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionMedecinsCentreComponent]
    });
    fixture = TestBed.createComponent(GestionMedecinsCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
