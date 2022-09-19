import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() class: string;
  @Input() wrap?: string;
  @Input() maxlength?: number;
  @Input() minlength?: number;
}
