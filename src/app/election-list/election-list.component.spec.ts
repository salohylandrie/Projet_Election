import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeListComponent } from './election-list.component';

describe('EmployeListComponent', () => {
  let component: EmployeListComponent;
  let fixture: ComponentFixture<EmployeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeListComponent]
    });
    fixture = TestBed.createComponent(EmployeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
