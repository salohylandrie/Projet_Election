import { TestBed } from '@angular/core/testing';

import { ResultatCandService } from './resultat-cand.service';

describe('ResultatCandService', () => {
  let service: ResultatCandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultatCandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
