import { TestBed } from '@angular/core/testing';

import { FetchLibService } from './fetch-lib.service';

describe('FetchLibService', () => {
  let service: FetchLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
