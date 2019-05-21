import { GifSearchService } from './git-search.service';

describe('gif-search.service.spec.ts', () => {
    let service: GifSearchService;
    const httpMock = jasmine.createSpyObj('Http', ['get']);

    beforeEach(() => {
        service = new GifSearchService(null);
    });

    let term:string = "happy";
    let limit:number = 2;
    let finalUrl:string = "//api.giphy.com/v1/gifs/search?q=" + term + "&api_key=" +  service.getApiKey() + "&limit=" + limit;

    it('gifSearch', () => {
        service.searchGif(term, limit);
        expect(httpMock.get).toHaveBeenCalled();
        expect(httpMock.get).toHaveBeenCalledWith(finalUrl);
    });

    it('getUrl', () => {
        const url = service.getUrl(term, limit);
        expect(url).toBe(finalUrl);
    })
});