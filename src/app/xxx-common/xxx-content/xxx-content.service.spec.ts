import { TestBed } from '@angular/core/testing';

import { XxxContentService } from './xxx-content.service';

describe('XxxContentService', () => {
  let service: XxxContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XxxContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
