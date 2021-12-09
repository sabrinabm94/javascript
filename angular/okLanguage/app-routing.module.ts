import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//services
import { AuthGuardService } from './_service/authGuard.service';

//components
import { AdminComponent } from './components/admin/admin.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { searchUserComponent } from './components/searchUser/searchUser.component';
import { UserProfileComponent } from './components/userProfile/userProfile.component';
import { UserRegisterComponent } from './components/userRegister/userRegister.component';

const routes: Routes = [
  //liberadas
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UserRegisterComponent },

  //só autenticado
  { path: 'users', component: searchUserComponent, canActivate: [AuthGuardService]  },
  { path: 'user/:id', component: searchUserComponent, canActivate: [AuthGuardService]  },
  { path: 'user', component: UserProfileComponent, canActivate: [AuthGuardService]  },
  { path: 'user/change-password/:id', component: UserProfileComponent, canActivate: [AuthGuardService]  },

  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]  },

  { path: 'chats', component: ChatComponent, canActivate: [AuthGuardService]  },
  { path: 'chat/:id', component: ChatComponent, canActivate: [AuthGuardService]  },
  { path: 'chat/receiver/:id', component: ChatComponent, canActivate: [AuthGuardService]  },
  { path: 'chat/sender/:id', component: ChatComponent, canActivate: [AuthGuardService]  },
  { path: 'chat/message/:id', component: ChatComponent, canActivate: [AuthGuardService]  },

  { path: 'messages', component: ChatComponent, canActivate: [AuthGuardService]  },
  { path: 'message/:id', component: ChatComponent, canActivate: [AuthGuardService]  },
  { path: 'message/receiver/:id', component: ChatComponent, canActivate: [AuthGuardService]  },
  { path: 'message/sender/:id', component: ChatComponent, canActivate: [AuthGuardService]  },
  { path: 'message/message/:id', component: ChatComponent, canActivate: [AuthGuardService]  },

  { path: '', component: LoginComponent, canActivate: [AuthGuardService] },
  { path: '**', component: LoginComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ 
    RouterModule 
  ]
})

export class AppRoutingModule {
  
}
