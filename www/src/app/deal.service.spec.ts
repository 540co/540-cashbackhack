import { TestBed, inject } from '@angular/core/testing';

import { DealService } from './deals.service';

describe('DealService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DealService]
    });
  });

  it('should be created', inject([DealService], (service: DealService) => {
    expect(service).toBeTruthy();
  }));
});
