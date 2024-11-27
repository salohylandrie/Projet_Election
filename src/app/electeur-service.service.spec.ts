import { TestBed } from '@angular/core/testing';

import { ElecteurServiceService } from './electeur-service.service';

describe('ElecteurServiceService', () => {
  let service: ElecteurServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElecteurServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
