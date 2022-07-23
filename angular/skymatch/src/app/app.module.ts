import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//default
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '@app/app.component';

//packages
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//pages
import { RegisterComponent } from './view/pages/register/register.component';
import { LoginComponent } from './view/pages/login/login.component';
import { NotificationComponent } from './view/pages/notification/notification.component';
import { InboxComponent } from './view/pages/inbox/inbox.component';
import { DirectComponent } from './view/pages/direct/direct.component';
import { ProfileComponent } from './view/pages/profile/profile.component';
import { MatchesComponent } from './view/pages/matches/matches.component';

//templates
import { HeaderComponent } from './view/templates/header/header.component';
import { FooterComponent } from './view/templates/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    NotificationComponent,
    InboxComponent,
    DirectComponent,
    ProfileComponent,
    MatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
