import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { timeout, map, catchError } from 'rxjs/operators';

//models
import { Notification } from '@app/models/Notification';

//services
import { PropertiesService } from '../core/properties.service';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private servicePrefix = "/notification"
  private apiUrl: string = this.propertiesService.apiUrl + this.servicePrefix;
  private requestTimeout: number = this.propertiesService.requestTimeout;

  constructor(
    private http: HttpClient,
    private propertiesService: PropertiesService
  ) {}

  ngOnInit() {}
}
