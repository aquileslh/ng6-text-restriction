import { TestBed, inject } from '@angular/core/testing';

import { Ng6TextRestrictionsService } from './ng6-text-restrictions.service';

describe('Ng6TextRestrictionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ng6TextRestrictionsService]
    });
  });

  it('should be created', inject([Ng6TextRestrictionsService], (service: Ng6TextRestrictionsService) => {
    expect(service).toBeTruthy();
  }));
});
