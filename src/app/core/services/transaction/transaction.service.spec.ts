import { TestBed, inject } from '@angular/core/testing';

import { TrasactionService } from './transaction.service';

describe('TransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrasactionService]
    });
  });

  it('should be created', inject([TrasactionService], (service: TrasactionService) => {
    expect(service).toBeTruthy();
  }));
});
