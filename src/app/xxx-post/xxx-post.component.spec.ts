import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XxxPostComponent } from './xxx-post.component';

describe('XxxUserComponent', () => {
  let component: XxxPostComponent;
  let fixture: ComponentFixture<XxxPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [XxxPostComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(XxxPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
