import { Injectable, Output, EventEmitter } from '@angular/core';
import { NavegateService } from './navegate.service';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ErrorVerificationService {
    @Output() sendMessageToAlertComponent: EventEmitter<object> = new EventEmitter();
    
    constructor(private navegateService: NavegateService) {

    }

    errorVerificationShowMessage(error: any) {
        console.log(error);
        if(error != null && error != undefined) {
            this.showMessage(error.message, error);
        } else {
            this.showMessage("Sucesso!", null);
        }
    }

    errorVerificationShowErrorMessage(error: any) {
        console.log(error);
        if(error != null && error != undefined) {
            this.showMessage(error.message, error);
        }
    }

    errorVerificationByMethodShowErrorMessage(error: any, method: string) {
        console.log(error);
        if((error != null || error != undefined) && error.method == method) {
            this.showMessage(error.message, error);
        } 
    }

    showMessage(message: string, error: any) {
        console.log(error);
        let alertComponentMessage: object = null;
        if(error != null && error != undefined) {
            alertComponentMessage = {
                message: message,
                success: false,
                error: error
            };
        } else {
            alertComponentMessage = {
                message: message,
                success: true
            };
        }
        
        this.sendMessageToAlertComponent.emit(alertComponentMessage);
        throwError(message);
    }
}


