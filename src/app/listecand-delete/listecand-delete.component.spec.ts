import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecandDeleteComponent } from './listecand-delete.component';

describe('ListecandDeleteComponent', () => {
  let component: ListecandDeleteComponent;
  let fixture: ComponentFixture<ListecandDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListecandDeleteComponent]
    });
    fixture = TestBed.createComponent(ListecandDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
