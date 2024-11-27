import { TestBed } from '@angular/core/testing';

import { ResultatParBVService } from './resultat-par-bv.service';

describe('ResultatParBVService', () => {
  let service: ResultatParBVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultatParBVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
