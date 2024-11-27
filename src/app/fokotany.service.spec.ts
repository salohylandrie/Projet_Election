import { TestBed } from '@angular/core/testing';

import { FokotanyService } from './fokotany.service';

describe('FokotanyService', () => {
  let service: FokotanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FokotanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
