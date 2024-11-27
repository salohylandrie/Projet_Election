import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreDeleteComponent } from './registre-delete.component';

describe('RegistreDeleteComponent', () => {
  let component: RegistreDeleteComponent;
  let fixture: ComponentFixture<RegistreDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistreDeleteComponent]
    });
    fixture = TestBed.createComponent(RegistreDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
