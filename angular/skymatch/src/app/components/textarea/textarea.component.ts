import { Component, Input, OnInit } from '@angular/core';
import { ValidationService } from '@app/core/validation.service';

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
}
