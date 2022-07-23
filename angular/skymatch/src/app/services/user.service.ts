import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { timeout, map, catchError } from 'rxjs/operators';

//models
import { User } from '@app/models/user';

//services
import { PropertiesService } from '../core/properties.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  private servicePrefix = "/user"
  private apiUrl: string = this.propertiesService.apiUrl + this.servicePrefix;
  private requestTimeout: number = this.propertiesService.requestTimeout;

  constructor(
    private http: HttpClient,
    private propertiesService: PropertiesService
  ) {}

  ngOnInit() {}

  getAll() {
    return this.http
      .get<User[]>(`${this.apiUrl}/all`)
      .pipe(timeout(this.requestTimeout));
  }

  getUserByUsername(username: String) {
    return this.http
      .get<User>(`${this.apiUrl}/username=${username}`)
      .pipe(timeout(this.requestTimeout));
  }

  getById(id: number) {
    return this.http
      .get<User>(`${this.apiUrl}/${id}`)
      .pipe(timeout(this.requestTimeout));
  }

  save(user: User) {
    return this.http
      .post<User>(`${this.apiUrl}/save`, user)
      .pipe(timeout(this.requestTimeout));
  }

  update(user: User) {
    return this.http
      .put<User>(`${this.apiUrl}/update`, user)
      .pipe(timeout(this.requestTimeout));
  }

  deactivate(user: User) {
    return this.http
      .post<User>(`${this.apiUrl}/deactivate/${user.id}`, null)
      .pipe(timeout(this.requestTimeout));
  }

  deleteById(user: User) {
    return this.http
      .delete(`${this.apiUrl}/delete/${user.id}`)
      .pipe(timeout(this.requestTimeout));
  }
}
