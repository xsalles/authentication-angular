import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { enviroment } from '../../constants/enviroment';
import { RegisterForm } from '../interfaces/auth/index';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);

  register(req: RegisterForm) {
    return this.http
      .post(`${enviroment.apiUrl}/register`, req)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
