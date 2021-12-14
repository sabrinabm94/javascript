import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { timeout, map, catchError} from 'rxjs/operators';
import { DeepUser } from '../_model/deepUser';
import { PropertiesService } from './properties.service';

@Injectable({ providedIn: 'root' })

export class DeepUserService {
    public apiUrl:string = this.propertiesService.apiUrl + "/deepUser";
    public requestTimeout: number = this.propertiesService.requestTimeout;
    
    constructor(private http:HttpClient, private propertiesService:PropertiesService, private authService: AuthService) {

    }

    ngOnInit() {
    
    }
    
    getAll() {
        return this.http.get<DeepUser[]>(`${this.apiUrl}/all`).pipe(
            timeout(this.requestTimeout)
        );
    }

    getById(id: number) {
        return this.http.get<DeepUser[]>(`${this.apiUrl}/${id}`).pipe(
            timeout(this.requestTimeout)
        );
    }

    save(deepUser:DeepUser) {
        return this.http.post<DeepUser>(`${this.apiUrl}/save`, deepUser).pipe(
            timeout(this.requestTimeout)
        );
    }
    
    update(deepUser:DeepUser) {
        return this.http.put<DeepUser>(`${this.apiUrl}/update`, deepUser).pipe(
            timeout(this.requestTimeout)
        );
    }

    deleteById(deepUser:DeepUser) {
        return this.http.delete(`${this.apiUrl}/delete/${deepUser.id}`).pipe(
            timeout(this.requestTimeout)
        );
    }
}