import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//services
import { AuthGuardService } from './core/auth-guard.service';

//pages
import { RegisterComponent } from './view/pages/register/register.component';
import { LoginComponent } from './view/pages/login/login.component';
import { NotificationComponent } from './view/pages/notification/notification.component';
import { InboxComponent } from './view/pages/inbox/inbox.component';
import { DirectComponent } from './view/pages/direct/direct.component';
import { ProfileComponent } from './view/pages/profile/profile.component';
import { MatchesComponent } from './view/pages/matches/matches.component';


const routes: Routes = [
  //free area
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  //authenticated area
  { path: 'notifications', component: NotificationComponent, canActivate: [AuthGuardService] },
  { path: 'inbox', component: InboxComponent, canActivate: [AuthGuardService] },
  { path: 'direct/:userName', component: DirectComponent, canActivate: [AuthGuardService] },
  { path: 'profile/:userName', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'matches', component: MatchesComponent, canActivate: [AuthGuardService] },

  //generics
  { path: '', component: LoginComponent, canActivate: [AuthGuardService] },
  { path: '**', component: LoginComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
