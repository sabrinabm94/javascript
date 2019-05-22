/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

fdescribe('AppComponent', () => {
  let componentTitle: string = "gif-search";
  let mainPageTitle: string = "Gif search";
  let mainTitleTag: string = "h1";

  let config: Route[] = [
    { path: '', component: AppComponent },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule, RouterTestingModule.withRoutes(config)
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));

  it('should create the main component', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have a component title', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(componentTitle);
  }));

  it('should have a main page title', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(mainTitleTag).textContent).toContain(mainPageTitle);
  }));
});