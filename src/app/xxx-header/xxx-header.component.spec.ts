import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XxxHeaderComponent } from './xxx-header.component';

describe('XxxHeaderComponent', () => {
  let component: XxxHeaderComponent;
  let fixture: ComponentFixture<XxxHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [XxxHeaderComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(XxxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
