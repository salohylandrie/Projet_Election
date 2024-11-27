import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecteurDeleteComponent } from './candidat-delete.component';

describe('ElecteurDeleteComponent', () => {
  let component: ElecteurDeleteComponent;
  let fixture: ComponentFixture<ElecteurDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElecteurDeleteComponent]
    });
    fixture = TestBed.createComponent(ElecteurDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
