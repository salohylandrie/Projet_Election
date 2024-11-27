import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FokotanyListComponent } from './fokotany-list.component';

describe('FokotanyListComponent', () => {
  let component: FokotanyListComponent;
  let fixture: ComponentFixture<FokotanyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FokotanyListComponent]
    });
    fixture = TestBed.createComponent(FokotanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
