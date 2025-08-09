import { TestBed } from '@angular/core/testing';

import { XxxUserFacadeService } from './xxx-user-facade.service';

describe('XxxUserFacadeServiceService', () => {
  let service: XxxUserFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XxxUserFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
