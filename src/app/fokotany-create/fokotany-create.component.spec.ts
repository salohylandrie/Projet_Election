import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FokotanyCreateComponent } from './fokotany-create.component';

describe('FokotanyCreateComponent', () => {
  let component: FokotanyCreateComponent;
  let fixture: ComponentFixture<FokotanyCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FokotanyCreateComponent]
    });
    fixture = TestBed.createComponent(FokotanyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
