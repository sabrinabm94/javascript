import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class GifSearchService {

    private apiKey:string = "MeGG5sG2LWbeS2S6FhMHEBByZ51gsRie";

    constructor(private http:HttpClient) {

    }

    //modelo assincrono, fazemos uma requisição sem bloquear a aplicação esperando sua resposta.
    searchGif(limit:number, term:string) {
        let url = "//api.giphy.com/v1/gifs/search?q=" + term + "&api_key=" +  this.apiKey + "&limit=" + limit;

        return this.http.get<any[]>(`${url}/`);
    }
    
}