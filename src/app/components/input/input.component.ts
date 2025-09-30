import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'component-input',
  imports: [InputTextModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() value: string = '';
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) type: string = '';
}
