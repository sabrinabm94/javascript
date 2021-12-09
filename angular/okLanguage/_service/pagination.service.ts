import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class PaginationService {
    constructor() {

    }

    ngOnInit() {
        
    }

    //pega o elemento clicado e identifica o número a página
    formatClikedElement(event): any {
      let clikedElement = event.target.innerText;

      clikedElement = clikedElement.split("(");

      let clickPage = {
        clikedElement: +clikedElement[0] - 1,
        clickedElementHelper: clikedElement[0]
      }
      return clickPage;
    }
    
    pagination(clickPage, page: number, pageSize: number): any {
        let paginationRequest = {
          selectedPage: 0,
          pageSize: 0
        }

        //elemento clicado é número de página
        if(!isNaN(clickPage.clikedElement) && clickPage.clikedElement != null && clickPage.clikedElement != undefined) {
          paginationRequest.selectedPage = clickPage.clikedElement;
        } else {
          //elemento clicado é fecha de navegação
          if(clickPage.clickedElementHelper == "»") {
            paginationRequest.selectedPage = page;
          } else if(clickPage.clickedElementHelper == "«") {
            paginationRequest.selectedPage = page - 2;
          }
        }
        
        paginationRequest.pageSize = pageSize;

        return paginationRequest;
    }
}