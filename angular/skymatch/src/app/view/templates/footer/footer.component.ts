import { Component, OnInit } from '@angular/core';

//packages
import { faMagnifyingGlass, faComment, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faComment = faComment;
  faRightFromBracket = faRightFromBracket;

  constructor() { }

  ngOnInit(): void {
  }

}
