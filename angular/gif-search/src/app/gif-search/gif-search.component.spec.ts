/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { GifSearchComponent } from './gif-search.component';
import { GifSearchService } from './git-search.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

xdescribe('GifSearchComponent', () => {
  let component: GifSearchComponent;
  let fixture: ComponentFixture<GifSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GifSearchComponent],
      imports: [HttpClientTestingModule], 
      providers: [GifSearchService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create GifSearchComponent', () => {
    expect(component).toBeTruthy();
  });
});
