import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  regitertionUser(from: any) {
    return this.http.post(`${environment.baseApi}v1/auth/signup`, from);
  }

  LoginUser(form: any) {
    return this.http.post(`${environment.baseApi}v1/auth/login`, form);
  }

  processSuccessAuth() {
    const audio = new Audio();
    audio.src = 'assets/Audio/success-notification-alert_A_major.wav';
    audio.load();
    audio.play();
  }
}
