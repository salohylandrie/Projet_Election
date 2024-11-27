import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplacementListComponent } from './emplacement-list.component';

describe('EmplacementListComponent', () => {
  let component: EmplacementListComponent;
  let fixture: ComponentFixture<EmplacementListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmplacementListComponent]
    });
    fixture = TestBed.createComponent(EmplacementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
