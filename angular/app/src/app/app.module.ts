import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UserProfilePageComponent } from './components/user-profile-page/user-profile-page.component';
import { UserRegisterPageComponent } from './components/user-register-page/user-register-page.component';
import { UserSearchPageComponent } from './components/user-search-page/user-search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatPageComponent,
    AdminPageComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundPageComponent,
    UserProfilePageComponent,
    UserRegisterPageComponent,
    UserSearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
