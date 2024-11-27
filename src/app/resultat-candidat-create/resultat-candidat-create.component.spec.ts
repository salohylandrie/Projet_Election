import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatCandidatCreateComponent } from './resultat-candidat-create.component';

describe('ResultatCandidatCreateComponent', () => {
  let component: ResultatCandidatCreateComponent;
  let fixture: ComponentFixture<ResultatCandidatCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultatCandidatCreateComponent]
    });
    fixture = TestBed.createComponent(ResultatCandidatCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
