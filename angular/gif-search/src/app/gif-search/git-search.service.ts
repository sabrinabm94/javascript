import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gif } from '../model/gif';

@Injectable({ providedIn: 'root' })

export class GifSearchService {
    private apiKey:string = "MeGG5sG2LWbeS2S6FhMHEBByZ51gsRie";
    private shortUrl:string = "//api.giphy.com/v1/gifs/search?q=";

    constructor(private http:HttpClient) {

    }

    getUrl(term:string, limit:number): string {
        return this.shortUrl + term + "&api_key=" +  this.apiKey + "&limit=" + limit;
    }

    getApiKey():string {
        return this.apiKey;
    }

    //modelo assincrono, fazemos uma requisição sem bloquear a aplicação esperando sua resposta.
    searchGif(term:string, limit:number):Observable<Gif[]> {
        let url:string = this.getUrl(term, limit);
        return  this.http.get<Gif[]>(`${url}/`);
    }
}