import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionprCreateComponent } from './electionpr-create.component';

describe('ElectionprCreateComponent', () => {
  let component: ElectionprCreateComponent;
  let fixture: ComponentFixture<ElectionprCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectionprCreateComponent]
    });
    fixture = TestBed.createComponent(ElectionprCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
