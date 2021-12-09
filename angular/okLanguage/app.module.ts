import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPasswordToggleModule } from 'ngx-password-toggle';

//service
import { PropertiesService } from './_service/properties.service';
import { AuthInterceptorService } from './_service/authInterceptor.service';
import { AuthService } from './_service/authService.service';

//components
import { AdminComponent } from './components/admin/admin.component';
import { AlertComponent } from './components/alert/alert.component';
import { ChatComponent } from './components/chat/chat.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InvalidFieldComponent } from './components/invalidField/invalidField.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { searchUserComponent } from './components/searchUser/searchUser.component';
import { UserProfileComponent } from './components/userProfile/userProfile.component';
import { UserRegisterComponent } from './components/userRegister/userRegister.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AlertComponent,
    ChatComponent,
    FooterComponent,
    HeaderComponent,
    InvalidFieldComponent,
    LoginComponent,
    NotFoundComponent,
    searchUserComponent,
    UserProfileComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule, 
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NgxPasswordToggleModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
      deps: [PropertiesService, AuthService]
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
