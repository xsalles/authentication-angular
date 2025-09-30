import { Component } from '@angular/core';
import { CompanyComponent } from "../../template/company/company.component";
import { SignInComponent } from '../../components/forms/sign-in/sign-in.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'page-sign-in',
  imports: [CompanyComponent, SignInComponent, RouterLink],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.scss'
})
export class SignInPageComponent {

}
