import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GifSearchService } from './git-search.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.css']
})

export class GifSearchComponent implements OnInit {
  @Output() sendToList = new EventEmitter<any[]>();
  public gifs: any[] = [];
  public form: FormGroup;
  public limitPatter: string;
  public termPatter: string;

  //inclusão do service: injeção de dependencia ou inversão de controles
  constructor(private service: GifSearchService) {

  }

  ngOnInit() {
    this.buildForm();
  }

  //methods
  buildForm() {
    this.limitPatter = this.service.limitPatter;
    this.termPatter = this.service.termPatter;
    this.form = new FormGroup({
      'limit': new FormControl([
        Validators.required, 
      ]),
      'term': new FormControl([
        Validators.required,
      ]),
    });

    this.form.reset();
  }

  searchGif(term: string, limit: number): any {
    return this.service.searchGif(term, limit);
  }

  sendDataToPage(elements) {
    this.sendToList.emit(elements);
  }

  //async
  async search(form: FormGroup) {
    this.gifs = [];

    let response = await this.searchGif(form.value.term, form.value.limit)
    .toPromise()
    .catch(error => console.log(error));

    response = response.data;
    response.forEach(gif => {
      this.gifs.push(gif);
    });

    this.sendDataToPage(this.gifs);
    
    return this.gifs;
  }
}
