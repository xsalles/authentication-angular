import { Component } from '@angular/core';
import { InputComponent } from '../../input/input.component';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'component-form-sign-in',
  imports: [InputComponent, ButtonComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {}
