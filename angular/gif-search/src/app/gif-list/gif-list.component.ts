import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.css']
})

export class GifListComponent implements OnInit {
  @Input()
  public gifs:any[] = []

  constructor(private title:Title) {

  }

  ngOnInit() {
    this.changePageTitle("Gif search");
    
  }

  changePageTitle(title:string) {
    return this.title.setTitle(title);
  }

  receiveDataFromSearch(elements) {
    this.gifs = elements;
  }
}
