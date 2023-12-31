import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCentresComponent } from './gestion-centres.component';

describe('GestionCentresComponent', () => {
  let component: GestionCentresComponent;
  let fixture: ComponentFixture<GestionCentresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionCentresComponent]
    });
    fixture = TestBed.createComponent(GestionCentresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
