import { Component } from '@angular/core';
import { InputComponent } from "../../input/input.component";
import { ButtonComponent } from "../../button/button.component";

@Component({
  selector: 'component-form-sign-up',
  imports: [InputComponent, ButtonComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

}
