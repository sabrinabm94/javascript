import { Component, OnInit } from '@angular/core';

//models
import { User } from '@models//user';

//enums
import { Gender } from '@enums//gender'; 
import { SexOrientation } from '@enums//sexOrientation'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  private user: User = {
    id: 1,
    firstName: 'Sabrina',
    lastName: 'B.',
    profilePicture: 'https://www.infoescola.com/wp-content/uploads/2009/02/unicornio-450x360.jpg',
    username: null,
    password: null,
    email: null,
    birthDate: null,
    age: null,
    gender: Gender.woman,
    sexOrientation: SexOrientation.straight,
    height: null,
    languages: [],
    astralMap: null,
    token: null,
    partnerIdealization: null,
    compatiblePartners: [],
    matches: []
  };
  public userImageUrl: String = this.user.profilePicture;
  public userName: String = this.user.firstName + ' ' + this.user.lastName;

  constructor() {
    
  }

  ngOnInit(): void {
    
  }
}
