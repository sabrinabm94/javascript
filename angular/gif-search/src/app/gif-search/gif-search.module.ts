import { NgModule } from '@angular/core';
import { GifSearchComponent } from './gif-search.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ AppRoutingModule ],
  declarations: [ GifSearchComponent ],
  exports: [ GifSearchComponent, CommonModule, FormsModule, HttpClientModule, RouterModule ],
  providers: []
})

export class GifSearchModule {
  
}