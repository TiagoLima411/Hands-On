import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { signupPageComponent } from './signup-page.component';

describe('signupPageComponent', () => {
  let component: signupPageComponent;
  let fixture: ComponentFixture<signupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ signupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(signupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
