import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidFieldComponent } from './invalidField.component';

describe('InvalidFieldComponent', () => {
  let component: InvalidFieldComponent;
  let fixture: ComponentFixture<InvalidFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
