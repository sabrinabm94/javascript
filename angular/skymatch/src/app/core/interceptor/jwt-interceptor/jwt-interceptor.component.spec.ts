import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtInterceptorComponent } from './jwt-interceptor.component';

describe('JwtInterceptorComponent', () => {
  let component: JwtInterceptorComponent;
  let fixture: ComponentFixture<JwtInterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JwtInterceptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JwtInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
