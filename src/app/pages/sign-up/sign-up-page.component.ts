import { Component } from '@angular/core';
import { CompanyComponent } from '../../template/company/company.component';
import { SignUpComponent } from '../../components/forms/sign-up/sign-up.component';
import { RouterLinkActive, RouterLink } from "@angular/router";

@Component({
  selector: 'page-sign-up',
  imports: [CompanyComponent, SignUpComponent, RouterLinkActive, RouterLink],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss',
})
export class SignUpPageComponent {}
