import { TestBed } from '@angular/core/testing';

import { OrderInfoLibService } from './order-info-lib.service';

describe('OrderInfoLibService', () => {
  let service: OrderInfoLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderInfoLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
