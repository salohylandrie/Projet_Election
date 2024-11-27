import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatCandidatListComponent } from './resultat-candidat-list.component';

describe('ResultatCandidatListComponent', () => {
  let component: ResultatCandidatListComponent;
  let fixture: ComponentFixture<ResultatCandidatListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultatCandidatListComponent]
    });
    fixture = TestBed.createComponent(ResultatCandidatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
