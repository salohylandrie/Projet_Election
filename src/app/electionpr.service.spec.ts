import { TestBed } from '@angular/core/testing';

import { ElectionprService } from './electionpr.service';

describe('ElectionprService', () => {
  let service: ElectionprService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectionprService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
