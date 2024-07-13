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

  it('should run loadingOff', done => {
    service.loadingOff();
    service.isLoading$.subscribe(result =>{
      expect(result).toEqual(false);
      done();
    })
  });

  it('should run loadingOn', done => {
    service.loadingOn();
    service.isLoading$.subscribe(result =>{
      expect(result).toEqual(true);
      done();
    })
  });
});
