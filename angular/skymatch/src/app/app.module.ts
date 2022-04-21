import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//default
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '@app/app.component';

//pages
import { ChatComponent } from '@pages//chat/chat.component';
import { LoginComponent } from '@pages//login/login.component';
import { MatchSearchComponent } from '@pages//match-search/match-search.component';
import { NotificationComponent } from '@pages//notification/notification.component';
import { UserRegisterComponent } from '@pages//register/user-register/user-register.component';
import { MatchRegisterComponent } from '@pages//register/match-register/match-register.component';
import { UserProfileComponent } from '@pages//user-profile/user-profile.component';

//templates
import { HeaderComponent } from '@templates//header/header.component';
import { FooterComponent } from '@templates//footer/footer.component';

//core
import { AuthComponent } from '@guard//auth/auth.component';
import { ErrorInterceptor } from '@interceptor//error-interceptor/error-interceptor.component';
import { JwtInterceptor } from '@interceptor//jwt-interceptor/jwt-interceptor.component';

//services
import { AccountService } from '@services//account.service';

//packages
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    MatchSearchComponent,
    NotificationComponent,
    UserRegisterComponent,
    MatchRegisterComponent,
    UserProfileComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
