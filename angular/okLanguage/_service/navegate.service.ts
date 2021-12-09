import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })

export class NavegateService {
    constructor(private router: Router) {

    }

    ngOnInit() {
        
    }
    
    redirectToPage(pageName: string) {
        this.router.navigate(["/" + pageName]);
    }
}