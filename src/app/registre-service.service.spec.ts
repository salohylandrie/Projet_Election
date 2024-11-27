import { TestBed } from '@angular/core/testing';

import { RegistreServiceService } from './registre-service.service';

describe('RegistreServiceService', () => {
  let service: RegistreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
