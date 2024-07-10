import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XxxLoadingComponent } from './xxx-loading.component';

describe('XxxLoadingComponent', () => {
  let component: XxxLoadingComponent;
  let fixture: ComponentFixture<XxxLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XxxLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XxxLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
