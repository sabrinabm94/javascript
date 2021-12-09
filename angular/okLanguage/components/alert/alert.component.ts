import { Component, OnInit } from '@angular/core';
import { ErrorVerificationService } from '../../_service/errorVerification.service';
 
@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
  
export class AlertComponent implements OnInit {
    public success: boolean = null;
    public message: string = "";
    public showComponent;
    public objectComponent;

    constructor(private errorVerificationService: ErrorVerificationService) {

    }

    ngOnInit() { 
        this.errorVerificationService.sendMessageToAlertComponent.subscribe(objectComponent => {
            this.objectComponent = objectComponent;
            this.showAlert(this.objectComponent.message, this.objectComponent.success);
        });
    }

    showAlert(message: string, status: boolean) {
        this.setStatus(status);
        this.setMessage(message);
        this.show();
    }

    setStatus(status: boolean) {
        return this.success = status;
    }

    setMessage(message: string) {
        this.message = message;        
        return this.message;
    }
    
    show() {        
        this.showComponent = true;
    }

    hide() {        
        this.showComponent = false;
    }
}
  