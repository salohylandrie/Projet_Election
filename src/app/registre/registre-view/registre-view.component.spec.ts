import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreViewComponent } from './registre-view.component';

describe('RegistreViewComponent', () => {
  let component: RegistreViewComponent;
  let fixture: ComponentFixture<RegistreViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistreViewComponent]
    });
    fixture = TestBed.createComponent(RegistreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
