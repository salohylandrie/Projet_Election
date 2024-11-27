import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecteurViewComponent } from './candidat-view.component';

describe('ElecteurViewComponent', () => {
  let component: ElecteurViewComponent;
  let fixture: ComponentFixture<ElecteurViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElecteurViewComponent]
    });
    fixture = TestBed.createComponent(ElecteurViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
