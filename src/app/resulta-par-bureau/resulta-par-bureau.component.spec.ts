import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultaParBureauComponent } from './resulta-par-bureau.component';

describe('ResultaParBureauComponent', () => {
  let component: ResultaParBureauComponent;
  let fixture: ComponentFixture<ResultaParBureauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultaParBureauComponent]
    });
    fixture = TestBed.createComponent(ResultaParBureauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
