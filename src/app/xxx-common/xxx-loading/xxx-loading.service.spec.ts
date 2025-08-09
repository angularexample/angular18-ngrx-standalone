import { TestBed } from '@angular/core/testing';

import { XxxLoadingService } from './xxx-loading.service';

describe('XxxLoadingService', () => {
  let service: XxxLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XxxLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
