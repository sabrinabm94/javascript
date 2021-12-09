import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PropertiesService } from './properties.service';
import { Role } from '../_model/role';
import { AuthService } from './auth.service';
import { timeout, map, catchError} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class RoleService {
    public apiUrl:string = this.propertiesService.apiUrl + "/role";
    public requestTimeout: number = this.propertiesService.requestTimeout;
    
    constructor(private http:HttpClient, private propertiesService:PropertiesService, private authService: AuthService) {

    }

    ngOnInit() {
        
    }
    
    getAll() {
        return this.http.get<Role[]>(`${this.apiUrl}/all`).pipe(
            timeout(this.requestTimeout)
        );
    }

    getById(id: number) {
        return this.http.get<Role[]>(`${this.apiUrl}/${id}`).pipe(
            timeout(this.requestTimeout)
        );
    }

    save(role:Role) {
        return this.http.post<Role>(`${this.apiUrl}/save`, role).pipe(
            timeout(this.requestTimeout)
        );
    }
    
    update(role:Role) {
        return this.http.put<Role>(`${this.apiUrl}/update`, role).pipe(
            timeout(this.requestTimeout)
        );
    }

    deleteById(role:Role) {
        return this.http.delete(`${this.apiUrl}/delete/${role.id}`).pipe(
            timeout(this.requestTimeout)
        );
    }
}