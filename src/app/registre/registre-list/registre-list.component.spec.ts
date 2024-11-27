import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreListComponent } from './registre-list.component';

describe('RegistreListComponent', () => {
  let component: RegistreListComponent;
  let fixture: ComponentFixture<RegistreListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistreListComponent]
    });
    fixture = TestBed.createComponent(RegistreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
