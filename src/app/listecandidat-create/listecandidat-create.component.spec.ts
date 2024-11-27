import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecandidatCreateComponent } from './listecandidat-create.component';

describe('ListecandidatCreateComponent', () => {
  let component: ListecandidatCreateComponent;
  let fixture: ComponentFixture<ListecandidatCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListecandidatCreateComponent]
    });
    fixture = TestBed.createComponent(ListecandidatCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
