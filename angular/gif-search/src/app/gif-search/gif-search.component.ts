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
  public error: any;

  //inclusão do service: injeção de dependencia ou inversão de controles
  constructor(private service: GifSearchService) {

  }

  ngOnInit() {
    this.buildForm();
  }

  //async
  async searchByAsync(form: FormGroup) {
    this.error = null;
    let response = await this.service.searchGif(form.value.term, form.value.limit)
    .toPromise()
    .catch(error => this.error = error);
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

  sendDataToGifList(elements) {
    this.sendToList.emit(elements);
  }

  searchBySubscribe(form: FormGroup) {
    this.error = null;
    this.service.searchGifObservable(form.value.term, form.value.limit)
    .subscribe(
      response => this.verifyResponse(response.data),
      error => this.error = error
    );
  }

  verifyResponse(response: any): any {
    this.gifs = [];

    if(this.error == null) {
      response.forEach(gif => {
        this.gifs.push(gif);
      });
      this.sendDataToGifList(this.gifs);
      return this.gifs;
    } else {
      return this.error;
    }
  }
}
