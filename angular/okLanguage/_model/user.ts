import { Gender } from './gender';
import { Role } from './role';
import { Country } from './country';
import { Language } from './language';
import { LanguageKnowledge } from './languageKnowledge';

export class User {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    age: number;
    gender: Gender;
    birthdate: Date;
    nativeCountry: Country;
    currentCountry: Country;
    nativeLanguages: Language[];
    LanguageKnowledge: LanguageKnowledge[]
    bio: string;
    email: string;
    password: string;
    active: boolean;
    role: Role;
    creationDate: Date;
    lastActiveDate: Date;
}