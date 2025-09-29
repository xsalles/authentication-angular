import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RightSideComponent } from "./template/right-side/right-side/right-side.component";
import { PassowrdComponent } from "./components/inputs/input-passowrd/input-passowrd.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RightSideComponent, PassowrdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'authentication-angular';
}
