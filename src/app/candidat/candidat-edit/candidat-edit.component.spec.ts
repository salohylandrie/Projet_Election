import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecteurEditComponent } from './candidat-edit.component';

describe('ElecteurEditComponent', () => {
  let component: ElecteurEditComponent;
  let fixture: ComponentFixture<ElecteurEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElecteurEditComponent]
    });
    fixture = TestBed.createComponent(ElecteurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
