import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RightSideComponent } from "./template/right-side/right-side/right-side.component";
import { InputComponent } from "./components/inputs/text/input.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RightSideComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Authentication Tivit';
}
