import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { timeout, map, catchError} from 'rxjs/operators';
import { Message } from '../_model/Message';
import { PropertiesService } from './properties.service';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })

export class MessageService {
    public apiUrl:string = this.propertiesService.apiUrl + "/message";
    public requestTimeout: number = this.propertiesService.requestTimeout;
    
    constructor(private http:HttpClient, private propertiesService:PropertiesService, private authService: AuthService) {

    }

    ngOnInit() {
        
    }
    
    getAll() {
        return this.http.get<Message[]>(`${this.apiUrl}/all`).pipe(
            timeout(this.requestTimeout)
        );
    }

    getById(id: number) {
        return this.http.get<Message[]>(`${this.apiUrl}/${id}`).pipe(
            timeout(this.requestTimeout)
        );
    }

    getAllByReceiver(id: number) {
        return this.http.get<Message[]>(`${this.apiUrl}/receiver/${id}`).pipe(
            timeout(this.requestTimeout)
        );
    }

    getAllBySender(id: number) {
        return this.http.get<Message[]>(`${this.apiUrl}/sender/${id}`).pipe(
            timeout(this.requestTimeout)
        );
    }

    getAllByChat(id: number) {
        return this.http.get<Message[]>(`${this.apiUrl}/chat/${id}`).pipe(
            timeout(this.requestTimeout)
        );
    }

    save(message: Message) {
        return this.http.post<Message>(`${this.apiUrl}/save`, message).pipe(
            timeout(this.requestTimeout)
        );
    }
    
    update(message: Message) {
        return this.http.put<Message>(`${this.apiUrl}/update`, message).pipe(
            timeout(this.requestTimeout)
        );
    }

    deleteById(message: Message) {
        return this.http.delete(`${this.apiUrl}/delete/${message.id}`).pipe(
            timeout(this.requestTimeout)
        );
    }
}