import { Language } from '@models//languages';
import { Religion } from '@models//religion';
import { Match } from '@models//match';
import { Sign } from '@models//sign';

export class User {
    id: string;
    bio: string;
    profilePicture: string;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    birthTime: string;
    birthAddress: Object;
    residenceAddress: Object;
    age: number;
    gender: Gender;
    orientation: Orientation;
    relationShipLooking: RelationshipType;
    actualRelationship: RelationshipType
    bodyType: bodyType;
    height: number;
    ethnicity: Ethnicity;
    politics: Politics;
    languages: Language[];
    education: Education;
    employment: Employment;
    religion: Religion;
    astralMap: Object = {
        sun: Sign,
        moon: Sign,
        ascendent: Sign,
        descedent: Sign, //house 7
        venus: Sign,
        mercury: Sign,
        marte: Sign
    }
    cigarrette: Frequency;
    marijuana: Frequency;
    drinking: Frequency;
    diet: Diet[];
    children: Possession;
    pet: Possession;
    token: string;
    matches: Match[];
    partnerIdealization: User;
}























