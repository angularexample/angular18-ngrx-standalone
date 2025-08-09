import { TestBed } from '@angular/core/testing';

import { XxxUserDataService } from './xxx-user-data.service';

describe('XxxUserDataServiceService', () => {
  let service: XxxUserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XxxUserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
