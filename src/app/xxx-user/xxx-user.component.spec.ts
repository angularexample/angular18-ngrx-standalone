import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XxxUserComponent } from './xxx-user.component';

describe('XxxUserComponent', () => {
  let component: XxxUserComponent;
  let fixture: ComponentFixture<XxxUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [XxxUserComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(XxxUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
