import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCentreComponent } from './ajout-centre.component';

describe('AjoutCentreComponent', () => {
  let component: AjoutCentreComponent;
  let fixture: ComponentFixture<AjoutCentreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutCentreComponent]
    });
    fixture = TestBed.createComponent(AjoutCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
