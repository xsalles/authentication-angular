import { Component, inject } from '@angular/core';
import { CompanyComponent } from '../../template/company/company.component';
import { SignUpComponent } from '../../components/forms/sign-up/sign-up.component';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/auth';

@Component({
  selector: 'page-sign-up',
  imports: [CompanyComponent, SignUpComponent, RouterLinkActive, RouterLink],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss',
})
export class SignUpPageComponent {
  user: User = { email: '', password: '' };

  private authService = inject(AuthService);

  register() {
    this.authService.register(this.user);
  }
}
