import { TestBed } from '@angular/core/testing';

import { XxxPostDataService } from './xxx-post-data.service';

describe('XxxUserDataServiceService', () => {
  let service: XxxPostDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XxxPostDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
