import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignInComponent } from "./components/forms/sign-in/sign-in.component";
import { SignUpComponent } from "./components/forms/sign-up/sign-up.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignInComponent, SignUpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Authentication Tivit';
}
