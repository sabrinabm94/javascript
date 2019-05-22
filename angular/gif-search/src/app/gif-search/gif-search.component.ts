import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GifSearchService } from './git-search.service';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.css']
})

export class GifSearchComponent implements OnInit {
  @Output() sendToList = new EventEmitter<any[]>();
  public gifs:any[] = [];

  //inclusão do service: injeção de dependencia ou inversão de controles
  constructor(private service: GifSearchService) {

  }

  ngOnInit() {

  }

  searchGif(term:string, limit:number): any {
    return this.service.searchGif(term, limit);
  }

  async search(term:string, limit:number) {
    this.gifs = [];

    let response = await this.searchGif(term, limit)
    .toPromise()
    .catch(error => console.log(error));

    response = response.data;

    response.forEach(gif => {
      this.gifs.push(gif);
    });

    this.sendDataToPage(this.gifs);

    return this.gifs;
  }

  sendDataToPage(elements) {
    this.sendToList.emit(elements);
  }
}
