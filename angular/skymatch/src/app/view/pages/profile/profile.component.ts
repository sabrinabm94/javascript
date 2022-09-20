import { Component, Input, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { BodyType } from '@app/models/enums/bodyType';
import { Diet } from '@app/models/enums/Diet';
import { Education } from '@app/models/enums/Education';
import { Employment } from '@app/models/enums/Employment';
import { Ethnicity } from '@app/models/enums/Ethnicity';
import { Frequency } from '@app/models/enums/Frequency';
import { Gender } from '@app/models/enums/Gender';
import { Interests } from '@app/models/enums/Interests';
import { MusicalStyle } from '@app/models/enums/MusicalStyle';
import { Politics } from '@app/models/enums/Politics';
import { Possession } from '@app/models/enums/Possession';
import { RelationshipType } from '@app/models/enums/RelationshipType';
import { SexOrientation } from '@app/models/enums/SexOrientation';
import { Language } from '@app/models/languages';
import { Religion } from '@app/models/religion';
import { User } from '@app/models/user';

import { ValidationService } from 'src/app/core/validation.service';
import { FormBuilder } from '@angular/forms';
import { PartnerIdealization } from '@app/models/partnerIdealization';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private validation: ValidationService
  ) {}

  public profileImage: string;
  public profileBio: string;
  public firstName: string;
  public lastName: string;
  public birthday: Date;
  public address: string;
  public gender: Gender;
  public password: string;
  public passwordConfirmation: string;
  public email: string;
  public emailConfirmation: string;
  public birthTime: string;
  public birthAddress: string;
  public sexOrientation: SexOrientation;
  public relationshipLooking: RelationshipType;
  public actualRelationship: RelationshipType;
  public bodyType: BodyType;
  public height: number;
  public ethnicity: Ethnicity;
  public politics: Politics;
  public languages: Language;
  public education: Education;
  public employment: Employment;
  public religion: Religion;
  public favorityMusic: String;
  public favorityBook: String;
  public cigarrette: Frequency;
  public marijuana: Frequency;
  public drinking: Frequency;
  public diet: Diet;
  public morningPerson: boolean;
  public children: Possession;
  public pet: Possession;
  public tatto: Possession;
  public musicalStyle: MusicalStyle[];
  public interests: Interests[];

  public basicInfoForm = this.formBuilder.group({
    profilePicture: "",
    profileBio: "",
    firstName: "",
    lastName: "",
    birthday: null,
    address: "",
    gender: "",
  });

  public user: User;

  ngOnInit(): void {}

  onSubmit(): void {
    this.setUserInfo(this.user, this.basicInfoForm);
    this.basicInfoForm.reset();
  }

  getUserInfo(user: User) {
    user = {
      profilePicture: '/',
      profileBio: 'Blablabla',
      firstName: 'Sabrina',
      lastName: 'Boing',
      birthDate: null,
      address: '',
      gender: Gender.woman,
      id: 1,
      username: "sabrinabm94",
      password: "123",
      email: "sabrinabm94@gmail.com",
      age: 28,
      sexOrientation: SexOrientation.straight,
      height: 1.53,
      languages: null,
      astralMap: undefined,
      token: "123",
      partnerIdealization: null,
      compatiblePartners: [],
      matches: []
    }

    return user;
  }

  setUserInfo(user: User, form: any) {
    if (this.validation.check(user) && this.validation.check(form) === true) {
      user.profilePicture = form.profilePicture;
      user.profileBio = form.profileBio;
      user.firstName = form.firstName;
      user.lastName = form.lastName;
      user.birthDate = form.birthDate;
      user.address = form.address;
      user.gender = form.gende;
      user.password = form.password;
      user.email = form.email;
      user.birthTime = form.birthTime;
      user.birthAddress = form.birthAddress;
      user.sexOrientation = form.sexOrientation;
      user.relationshipLooking = form.relationshipLooking;
      user.actualRelationship = form.actualRelationship;
      user.bodyType = form.bodyType;
      user.height = form.height;
      user.ethnicity = form.ethnicity;
      user.politics = form.politics;
      user.languages = form.language;
      user.education = form.educatio;
      user.employment = form.employment;
      user.religion = form.religion;
      user.favoriteMusic = form.favorityMusic;
      user.favoriteBook = form.favorityBook;
      user.cigarrette = form.cigarrette;
      user.marijuana = form.marijuana;
      user.drinking = form.drinking;
      user.diet = form.diet;
      user.morningPerson = form.morningPerso;
      user.children = form.children;
      user.tatto = form.tatto;
      user.musicalStyle = form.musicalStyle;
      user.interests = form.interests;
    }
  }
}
