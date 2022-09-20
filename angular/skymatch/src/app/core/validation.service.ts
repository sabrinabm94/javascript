import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ValidationService {
  constructor() {}

  check(target: any) {
    if(target !== null && target !== undefined && target !== "") {
      return true;
    }
    return false;
  }
}
