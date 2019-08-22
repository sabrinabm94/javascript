import { GifListComponent } from './gif-list.component';
import { GifSearchService } from '../gif-search/git-search.service';
<<<<<<< Updated upstream
import { GifSearchComponent } from '../gif-search/gif-search.component';

=======
import { Observable } from 'rxjs';
>>>>>>> Stashed changes

fdescribe('GifListComponent', () => {
  let gifList: GifListComponent;
  let gifSearch: GifSearchComponent;
  let service: GifSearchService;
  let httpMock: any
  let limit: number = 1;
  let term: string = "dogs";

  beforeEach(() => {
    gifList = new GifListComponent(httpMock);
    gifSearch = new GifSearchComponent(httpMock);
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
    expect(httpMock.post).toHaveBeenCalled();
  });
<<<<<<< Updated upstream

  it('Should return value when search for gifs', () => {
    let results = service.formate(term, limit);
    expect(results).toBeGreaterThan(0);
  });
=======
>>>>>>> Stashed changes
});
