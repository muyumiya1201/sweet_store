import { TestBed } from '@angular/core/testing';

import { CartLibService } from './cart-lib.service';

describe('CartLibService', () => {
  let service: CartLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
