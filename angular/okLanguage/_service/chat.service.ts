import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { timeout, map, catchError} from 'rxjs/operators';
import { Chat } from '../_model/chat';
import { PropertiesService } from './properties.service';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })

export class ChatService {
    public apiUrl:string = this.propertiesService.apiUrl + "/chat";
    public requestTimeout: number = this.propertiesService.requestTimeout;
    
    constructor(private http:HttpClient, private propertiesService:PropertiesService, private authService: AuthService) {

    }

    ngOnInit() {
        
    }
    
    getAll() {
        return this.http.get<Chat[]>(`${this.apiUrl}/all`).pipe(
            timeout(this.requestTimeout)
        );
    }

    getById(id: number) {
        return this.http.get<Chat[]>(`${this.apiUrl}/${id}`).pipe(
            timeout(this.requestTimeout)
        );
    }

    getAllByReceiver(id: number) {
        return this.http.get<Chat[]>(`${this.apiUrl}/receiver/${id}`).pipe(
            timeout(this.requestTimeout)
        );
    }

    getAllBySender(id: number) {
        return this.http.get<Chat[]>(`${this.apiUrl}/sender/${id}`).pipe(
            timeout(this.requestTimeout)
        );
    }

    getAllByMessage(id: number) {
        return this.http.get<Chat[]>(`${this.apiUrl}/message/${id}`).pipe(
            timeout(this.requestTimeout)
        );
    }

    save(chat:Chat) {
        return this.http.post<Chat>(`${this.apiUrl}/save`, chat).pipe(
            timeout(this.requestTimeout)
        );
    }
    
    update(chat:Chat) {
        return this.http.put<Chat>(`${this.apiUrl}/update`, chat).pipe(
            timeout(this.requestTimeout)
        );
    }

    deleteById(chat:Chat) {
        return this.http.delete(`${this.apiUrl}/delete/${chat.id}`).pipe(
            timeout(this.requestTimeout)
        );
    }
}