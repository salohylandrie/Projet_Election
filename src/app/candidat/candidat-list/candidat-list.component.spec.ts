import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecteurListComponent } from './candidat-list.component';

describe('ElecteurListComponent', () => {
  let component: ElecteurListComponent;
  let fixture: ComponentFixture<ElecteurListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElecteurListComponent]
    });
    fixture = TestBed.createComponent(ElecteurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
