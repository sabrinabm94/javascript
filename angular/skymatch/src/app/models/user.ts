//models
import { Language } from '@models//languages';
import { Religion } from '@models//religion';
import { Match } from '@models//match';
import { Sign } from '@models//sign';
import { PartnerIdealization } from '@models//partnerIdealization';

//enums
import { Gender } from '@enums//Gender';
import { SexOrientation } from '@enums//SexOrientation';
import { RelationshipType } from '@enums//RelationshipType';
import { BodyType } from '@enums//bodyType';
import { Ethnicity } from '@enums//Ethnicity';
import { Politics } from '@enums//Politics';
import { Education } from '@enums//Education';
import { Employment } from '@enums//Employment';
import { Diet } from '@enums//Diet';
import { Possession } from '@enums//Possession';
import { MusicalStyle } from '@enums//MusicalStyle';
import { Interests } from '@enums//Interests';
import { Frequency } from '@enums//Frequency';

export class User {
  id: Number;
  profileBio?: String;
  profilePicture: String;
  username: String;
  password: String;
  email: String;
  firstName: String;
  lastName: String;
  birthDate: Date;
  birthTime?: String;
  address?: Object;
  birthAddress?: Object;
  residenceAddress?: Object;
  age: Number;
  gender: Gender;
  sexOrientation: SexOrientation;
  relationshipLooking?: RelationshipType;
  actualRelationship?: RelationshipType;
  bodyType?: BodyType;
  height: Number;
  ethnicity?: Ethnicity;
  politics?: Politics;
  languages: Language[];
  education?: Education;
  employment?: Employment;
  religion?: Religion;
  favoriteMusic?: String;
  favoriteBook?: String;
  astralMap: Object = {
    sun: Sign,
    moon: Sign,
    ascendent: Sign,
    descedent: Sign, //house 7
    venus: Sign,
    mercury: Sign,
    marte: Sign,
  };
  cigarrette?: Frequency;
  marijuana?: Frequency;
  drinking?: Frequency;
  diet?: Diet;
  morningPerson?: Boolean;
  children?: Possession;
  pet?: Possession;
  tatto?: Boolean;
  musicalStyle?: MusicalStyle[]; //limited to 3
  interests?: Interests[]; //limited to 6
  token: String;
  partnerIdealization: PartnerIdealization;
  //query priority
  //questined: sex, heightRange, body, ageRange, cigarrette, marijuana, drinking, children
  //complement: sexOrientation, astralMap
  //same aswer: relationshipLooking, actualRelationship, politics, languages, education, religion, diet, morningPerson, pet, tattoo, musicalStyle, interests
  compatiblePartners: Array<{
    //upper 70%
    userId: Number;
    compatibilityScore: Number;
  }>;
  matches: Match[];
}
