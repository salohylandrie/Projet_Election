import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauListComponent } from './bureau-list.component';

describe('BureauListComponent', () => {
  let component: BureauListComponent;
  let fixture: ComponentFixture<BureauListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BureauListComponent]
    });
    fixture = TestBed.createComponent(BureauListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
