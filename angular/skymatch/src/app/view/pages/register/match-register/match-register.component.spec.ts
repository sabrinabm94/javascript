import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchRegisterComponent } from './match-register.component';

describe('MatchRegisterComponent', () => {
  let component: MatchRegisterComponent;
  let fixture: ComponentFixture<MatchRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
