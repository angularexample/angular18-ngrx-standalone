import { TestBed } from '@angular/core/testing';

import { XxxPostFacadeService } from './xxx-post-facade.service';

describe('XxxUserFacadeServiceService', () => {
  let service: XxxPostFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XxxPostFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
