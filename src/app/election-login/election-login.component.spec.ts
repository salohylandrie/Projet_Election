import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionLoginComponent } from './election-login.component';

describe('ElectionLoginComponent', () => {
  let component: ElectionLoginComponent;
  let fixture: ComponentFixture<ElectionLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectionLoginComponent]
    });
    fixture = TestBed.createComponent(ElectionLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
