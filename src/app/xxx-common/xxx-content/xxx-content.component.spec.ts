import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XxxContentComponent } from './xxx-content.component';

describe('XxxContentComponent', () => {
  let component: XxxContentComponent;
  let fixture: ComponentFixture<XxxContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XxxContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XxxContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
