import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() class: string;
  @Input() id?: string;
  @Input() type: string;
  @Input() name?: string;
  @Input() pattern?: string;
  @Input() placeholder?: string;
  @Input() required?: boolean;
  @Input() checked?: boolean;
  @Input() disabled?: boolean;
  @Input() value?: string;
  @Input() min?: number;
  @Input() max?: number;
}
