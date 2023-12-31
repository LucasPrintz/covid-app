import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationCentreComponent } from './modification-centre.component';

describe('ModificationCentreComponent', () => {
  let component: ModificationCentreComponent;
  let fixture: ComponentFixture<ModificationCentreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificationCentreComponent]
    });
    fixture = TestBed.createComponent(ModificationCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
