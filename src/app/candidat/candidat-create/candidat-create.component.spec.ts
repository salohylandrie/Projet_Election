import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecteurCreateComponent } from './candidat-create.component';

describe('ElecteurCreateComponent', () => {
  let component: ElecteurCreateComponent;
  let fixture: ComponentFixture<ElecteurCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElecteurCreateComponent]
    });
    fixture = TestBed.createComponent(ElecteurCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
