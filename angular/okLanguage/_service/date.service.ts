import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({ providedIn: 'root' })

export class DateService {
    constructor() {

    }

    ngOnInit() {
        
    }

    createDateByBrString(date: string): Date {
      if(date != null && date != undefined) {
        let dateList: string[] = date.split("/");
        let yearOfDate: number = +dateList[dateList.length-1];
        let monthOfDate: number = +dateList[dateList.length-2];
        let dateOfDate: number = +dateList[dateList.length-3];
        
        let dateObject = new Date;
        dateObject.setFullYear(yearOfDate);
        dateObject.setMonth(monthOfDate - 1);
        dateObject.setDate(dateOfDate);
  
        return dateObject;
      }
      
      return null;
    }

    convertBrDateToUs(date: any): string {
      if(date != null && date != undefined) {
        if(typeof date == 'string') {
          date = this.createDateByBrString(date);
        }

        if(date != null && date != undefined && date != "Invalid Date") {
          let pipe = new DatePipe('en-US');
          let dateFormatted = pipe.transform(date, "yyyy-MM-dd");
    
          return dateFormatted;
        }  
        
        return date;
      }
  
      return null;
    }
  
    convertUsDateToBr(date: Date): string {
      if(date != null && date != undefined) {
        if(date.toString().search("-") != -1) {
          let dateList: string[] = [];

          //data americana com hora
          if(date.toString().search("T") != -1) {
            dateList = date.toString().split("T");
    
            dateList = dateList.toString().split("-");
            dateList = dateList.toString().split(",");

            dateList.pop();
            dateList.pop();
          } else {
            //data americana sem hora
            dateList = date.toString().split("-");
            dateList = dateList.toString().split(",");
          }
          
          let dateOfDate: string = dateList[dateList.length-1];
          let monthOfDate: string = dateList[dateList.length-2];
          let yearOfDate: string = dateList[dateList.length-3];

          date = new Date;
          date.setFullYear(+yearOfDate);
          date.setMonth(+monthOfDate);
          date.setDate(+dateOfDate);
    
          return dateOfDate + "/" + monthOfDate + "/" + yearOfDate;
        } 

        return date.toString();
      }
  
      return null;
    }

    setAgeByDate(birthdate: Date): number {
      let today = new Date();
      let age: number;
      let month: number;
      let thisYear = today.getFullYear();
      let birthdateYear = birthdate.getFullYear();
  
      if(thisYear >= birthdateYear) {
        age = thisYear - birthdateYear;
        month = today.getMonth() - birthdate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
          age = age - 1;
        }
        return age;
      } else {
        return null;
      }
    }
}