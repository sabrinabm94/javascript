import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInterceptorComponent } from './error-interceptor.component';

describe('ErrorInterceptorComponent', () => {
  let component: ErrorInterceptorComponent;
  let fixture: ComponentFixture<ErrorInterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorInterceptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
