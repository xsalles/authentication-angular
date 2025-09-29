import { Component, Input } from '@angular/core';
import { PasswordModule } from 'primeng/password'
import { FormsModule } from "@angular/forms"

@Component({
  selector: 'component-input-passowrd',
  imports: [PasswordModule, FormsModule],
  templateUrl: './input-passowrd.component.html',
  styleUrl: './input-passowrd.component.scss'
})
export class PassowrdComponent {
  @Input() value: string = '';
}
