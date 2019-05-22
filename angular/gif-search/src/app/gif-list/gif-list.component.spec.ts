import { GifListComponent } from './gif-list.component';
import { GifSearchService } from '../gif-search/git-search.service';
import { TestBed, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';

fdescribe('GifListComponent', () => {
  let gifList: GifListComponent;
  let service: GifSearchService;
  let httpMock: any
  let limit: number = 1;
  let term: string = "dogs";

  beforeEach(() => {
    gifList = new GifListComponent(httpMock);
    httpMock = jasmine.createSpyObj('http', [ 'get', 'post' ]);
    service = new GifSearchService(httpMock);
  });

  it('Should instantiate gifs list', () => {
    expect(JSON.stringify(gifList.gifs)).toBe(JSON.stringify([]));
    expect(gifList.gifs).not.toBeNull();
    expect(gifList.gifs.length).toBe(0);
  });

  it('Should call method get when search for gifs', () => {
    service.searchGif(term, limit);
    expect(httpMock.get).toHaveBeenCalled();
  });

  /* todo ajustar método
  it('Should return value when search for gifs', () => {
    let result = service.searchGif(term, limit);
    expect(result.length).toBeGreaterThan(0);
  });
  */
});
