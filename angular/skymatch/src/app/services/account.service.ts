import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { timeout, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

//models
import { User } from '@app/models/User';

//services
import { PropertiesService } from '../core/properties.service';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private servicePrefix = "/account"
  private apiUrl: string = this.propertiesService.apiUrl + this.servicePrefix;
  private requestTimeout: number = this.propertiesService.requestTimeout;

  constructor(
    private http: HttpClient,
    private propertiesService: PropertiesService
  ) { }

  ngOnInit() { }

  signin(user: User, signinUrl) {
    return this.http.post<User>(`${this.apiUrl}/` + signinUrl, user).pipe(
      timeout(this.requestTimeout)
    );
  }

  isLogged(token): boolean {
    if (token !== null && token !== undefined && token !== "") {
      return true;
    }

    return null;
  }

  loggout(router: Router, redirectUrl) {
    if (router !== null && router !== undefined) {
      router.navigate([redirectUrl]);
    }
  }
}
