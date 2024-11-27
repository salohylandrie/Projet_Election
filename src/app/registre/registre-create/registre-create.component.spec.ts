import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreCreateComponent } from './registre-create.component';

describe('RegistreCreateComponent', () => {
  let component: RegistreCreateComponent;
  let fixture: ComponentFixture<RegistreCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistreCreateComponent]
    });
    fixture = TestBed.createComponent(RegistreCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
