import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeEditComponent } from './election-edit.component';

describe('EmployeEditComponent', () => {
  let component: EmployeEditComponent;
  let fixture: ComponentFixture<EmployeEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeEditComponent]
    });
    fixture = TestBed.createComponent(EmployeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
