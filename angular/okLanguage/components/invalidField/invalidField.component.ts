import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-invalid-field',
  templateUrl: './invalid-field.component.html',
  styleUrls: ['./invalid-field.component.css']
})

export class InvalidFieldComponent implements OnInit {
  @Input()
  message: string;

  constructor() {

  }

  ngOnInit() {
    this.verifyMessage(this.message);
  }

  verifyMessage(message: string) {
    if(message != null && message != undefined) {
      this.message = message;
    } else {
      this.message = "Campo inválido!";
    }
  }
}
