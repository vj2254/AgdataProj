import { TestBed } from '@angular/core/testing';

import { NameAddressService } from './name-address.service';

describe('NameAddressService', () => {
  let service: NameAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
