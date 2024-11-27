import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionprListComponent } from './electionpr-list.component';

describe('ElectionprListComponent', () => {
  let component: ElectionprListComponent;
  let fixture: ComponentFixture<ElectionprListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectionprListComponent]
    });
    fixture = TestBed.createComponent(ElectionprListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
