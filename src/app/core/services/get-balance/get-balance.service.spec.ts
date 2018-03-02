import { TestBed, inject } from '@angular/core/testing';

import { GetBalanceService } from './get-balance.service';

describe('GetBalanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetBalanceService]
    });
  });

  it('should be created', inject([GetBalanceService], (service: GetBalanceService) => {
    expect(service).toBeTruthy();
  }));
});
