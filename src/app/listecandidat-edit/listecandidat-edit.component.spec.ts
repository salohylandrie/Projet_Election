import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecandidatEditComponent } from './listecandidat-edit.component';

describe('ListecandidatEditComponent', () => {
  let component: ListecandidatEditComponent;
  let fixture: ComponentFixture<ListecandidatEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListecandidatEditComponent]
    });
    fixture = TestBed.createComponent(ListecandidatEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
