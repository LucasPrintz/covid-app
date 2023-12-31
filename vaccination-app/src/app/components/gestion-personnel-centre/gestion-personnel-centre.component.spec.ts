import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPersonnelCentreComponent } from './gestion-personnel-centre.component';

describe('GestionPersonnelCentreComponent', () => {
  let component: GestionPersonnelCentreComponent;
  let fixture: ComponentFixture<GestionPersonnelCentreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionPersonnelCentreComponent]
    });
    fixture = TestBed.createComponent(GestionPersonnelCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
