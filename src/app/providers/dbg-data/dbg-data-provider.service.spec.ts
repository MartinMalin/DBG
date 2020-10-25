import { TestBed } from '@angular/core/testing';

import { DbgDataProviderService } from './dbg-data-provider.service';

describe('DbgDataProviderService', () => {
  let service: DbgDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbgDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
