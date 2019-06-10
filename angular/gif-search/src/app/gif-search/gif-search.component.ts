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

  //async
  async searchByAsync(form: FormGroup) {
    let response = await this.service.searchGif(form.value.term, form.value.limit)
    .toPromise()
    .catch(error => error = error);
    
    this.verifyResponse(response.data);
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

  sendDataToPage(elements) {
    this.sendToList.emit(elements);
  }

  searchBySubscribe(form: FormGroup) {
    this.service.searchGifObservable(form.value.term, form.value.limit)
    .subscribe(
      response => this.verifyResponse(response.data)
    );
  }

  verifyResponse(response: any): any {
    this.gifs = [];

    if(response != null && response != undefined) {
      response.forEach(gif => {
        this.gifs.push(gif);
      });
      this.sendDataToPage(this.gifs);
      return this.gifs;
    } else {
      console.log(response);
      return response;
    }
  }
}
