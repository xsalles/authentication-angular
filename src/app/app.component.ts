import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RightSideComponent } from "./template/right-side/right-side/right-side.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RightSideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'authentication-angular';
}
