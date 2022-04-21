import { Language } from '@models//languages';
import { Religion } from '@models//religion';
import { Match } from '@models//match';
import { Sign } from '@models//sign';
import { PartnerIdealization } from '@models//partnerIdealization';

export class User {
    id: Number;
    bio?: String;
    profilePicture: String;
    username: String;
    password: String;
    email: String;
    firstName: String;
    lastName: String;
    birthDate: Date;
    birthTime?: String;
    birthAddress?: Object;
    residenceAddress?: Object;
    age: Number;
    gender: Gender;
    sexOrientation: SexOrientation;
    relationshipLooking?: RelationshipType;
    actualRelationship?: RelationshipType;
    bodyType?: bodyType;
    height: Number;
    ethnicity?: Ethnicity;
    politics?: Politics;
    languages: Language[];
    education?: Education;
    employment?: Employment;
    religion?: Religion;
    astralMap: Object = {
        sun: Sign,
        moon: Sign,
        ascendent: Sign,
        descedent: Sign, //house 7
        venus: Sign,
        mercury: Sign,
        marte: Sign
    }
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
    compatiblePartners: Array<{ //upper 70%
        userId: Number,
        compatibilityScore: Number
    }>;
    matches: Match[];
}























