import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationUtilisateurComponent } from './modification-utilisateur.component';

describe('ModificationUtilisateurComponent', () => {
  let component: ModificationUtilisateurComponent;
  let fixture: ComponentFixture<ModificationUtilisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificationUtilisateurComponent]
    });
    fixture = TestBed.createComponent(ModificationUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
