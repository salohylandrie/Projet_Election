import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreEditComponent } from './registre-edit.component';

describe('RegistreEditComponent', () => {
  let component: RegistreEditComponent;
  let fixture: ComponentFixture<RegistreEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistreEditComponent]
    });
    fixture = TestBed.createComponent(RegistreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
