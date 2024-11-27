import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauEditComponent } from './bureau-edit.component';

describe('BureauEditComponent', () => {
  let component: BureauEditComponent;
  let fixture: ComponentFixture<BureauEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BureauEditComponent]
    });
    fixture = TestBed.createComponent(BureauEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
