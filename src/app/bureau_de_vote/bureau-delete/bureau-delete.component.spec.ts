import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauDeleteComponent } from './bureau-delete.component';

describe('BureauDeleteComponent', () => {
  let component: BureauDeleteComponent;
  let fixture: ComponentFixture<BureauDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BureauDeleteComponent]
    });
    fixture = TestBed.createComponent(BureauDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
