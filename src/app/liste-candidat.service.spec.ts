import { TestBed } from '@angular/core/testing';

import { ListeCandidatService } from './liste-candidat.service';

describe('ListeCandidatService', () => {
  let service: ListeCandidatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeCandidatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
