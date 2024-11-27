import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauViewComponent } from './bureau-view.component';

describe('BureauViewComponent', () => {
  let component: BureauViewComponent;
  let fixture: ComponentFixture<BureauViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BureauViewComponent]
    });
    fixture = TestBed.createComponent(BureauViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
