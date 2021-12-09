import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PropertiesService } from './properties.service';
import { User } from '../_model/user';
import { AuthService } from './auth.service';
import { timeout, map, catchError} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class UserService {
    public apiUrl: string = this.propertiesService.apiUrl + "/user";
    public requestTimeout: number = this.propertiesService.requestTimeout;
    
    constructor(private http: HttpClient, private propertiesService: PropertiesService, private authService: AuthService) {

    }

    ngOnInit() {
        
    }
    
    getAll() {
        return this.http.get<User[]>(`${this.apiUrl}/all`).pipe(
            timeout(this.requestTimeout)
        );
    }

    getByPage(pageNumber: number, paginationLimit: number) {
        return this.http.get<User[]>(`${this.apiUrl}/pageable?page=${pageNumber}&size=${paginationLimit}`);
    }
    
    getUserByUsername(username: String) {
        return this.http.get<User>(`${this.apiUrl}/username=${username}`).pipe(
            timeout(this.requestTimeout)
        );
    }

    getById(id: number) {
        return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
            timeout(this.requestTimeout)
        );
    }

    save(user:User) {
        return this.http.post<User>(`${this.apiUrl}/save`, user).pipe(
            timeout(this.requestTimeout)
        );
    }
    
    update(user:User) {
        return this.http.put<User>(`${this.apiUrl}/update`, user).pipe(
            timeout(this.requestTimeout)
        );
    }

    updatePassword(user:User) {
        return this.http.put<User>(`${this.apiUrl}/updatepassword`, user).pipe(
            timeout(this.requestTimeout)
        );
    }

    deactivate(user: User) {
        return this.http.post<User>(`${this.apiUrl}/deactivate/${user.id}`, null).pipe(
            timeout(this.requestTimeout)
        );
    }

    deleteById(user: User) {
        return this.http.delete(`${this.apiUrl}/delete/${user.id}`).pipe(
            timeout(this.requestTimeout)
        );
    }
}