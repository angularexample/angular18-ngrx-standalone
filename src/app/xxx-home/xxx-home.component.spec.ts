import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XxxHomeComponent } from './xxx-home.component';

describe('XxxHomeComponent', () => {
  let component: XxxHomeComponent;
  let fixture: ComponentFixture<XxxHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XxxHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XxxHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
