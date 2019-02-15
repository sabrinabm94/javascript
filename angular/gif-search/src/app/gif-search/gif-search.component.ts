import { Component, OnInit } from '@angular/core';
import { GifSearchService } from './git-search.service';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.css']
})

export class GifSearchComponent implements OnInit {
  gifs: any = [];

  //inclusão do service: injeção de dependencia ou inversão de controles
  constructor(private service: GifSearchService) {

  }

  ngOnInit() {

  }

  searchGif(limit:number, term:string): any {
    return this.service.searchGif(limit, term);
  }

  async search(limit:number, term:string) {
    let response = await this.searchGif(5, "dogs")
    .toPromise()
    .catch(error => console.log(error));

    response = response.data;

    response.forEach(gif => {
      this.gifs.push(gif);
    });

    return this.gifs;
  }
}
