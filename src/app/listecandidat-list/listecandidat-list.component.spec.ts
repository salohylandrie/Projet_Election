import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecandidatListComponent } from './listecandidat-list.component';

describe('ListecandidatListComponent', () => {
  let component: ListecandidatListComponent;
  let fixture: ComponentFixture<ListecandidatListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListecandidatListComponent]
    });
    fixture = TestBed.createComponent(ListecandidatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
