import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '@models//user';

@Injectable({ providedIn: 'root' })
export class MatchService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    public partner: User;
    public sinastryScore: number = 0;
    public matchScore: number = 0;
    
    constructor(
        private router: Router,
        private http: HttpClient
    ) 
    {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    matchScoreCalculation(user, partner, matchScore) {
        partner = user.partnerIdealization;
    }

    sinastryScoreCalculation(user, partner, sinastryScore) {
        partner = user.partnerIdealization;

        let userAstralMap = Object.keys(user.astralMap);

        for (let prop of userAstralMap) {
            console.log(prop);
            if (prop != undefined && (user.astralMap.prop.bestMatches.find(sign => sign.id == partner.astralMap.prop.id))) {
                sinastryScore++;
            }
        }

        return sinastryScore;
    }
}