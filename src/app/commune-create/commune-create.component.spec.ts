import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuneCreateComponent } from './commune-create.component';

describe('CommuneCreateComponent', () => {
  let component: CommuneCreateComponent;
  let fixture: ComponentFixture<CommuneCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommuneCreateComponent]
    });
    fixture = TestBed.createComponent(CommuneCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
