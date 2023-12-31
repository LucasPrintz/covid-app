import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningCentreComponent } from './planning-centre.component';

describe('PlanningCentreComponent', () => {
  let component: PlanningCentreComponent;
  let fixture: ComponentFixture<PlanningCentreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanningCentreComponent]
    });
    fixture = TestBed.createComponent(PlanningCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
