import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CoreServiesService {
  constructor(
    private LocalStorageService:LocalStorageService,
    private Roter:Router
  ) {}
  private _isLoading = new BehaviorSubject<boolean>(true);
  isLoading$ = this._isLoading.asObservable();

  errorMessageSubject$ = new BehaviorSubject<string | null>(null);

  processSuccessAuth() {
    const audio = new Audio();
    audio.src = 'assets/Audio/success-notification-alert_A_major.wav';
    audio.load();
    audio.play();
  }

   proccingLogOut() {
    this.LocalStorageService.remove('token');
    this.Roter.navigate(['/auth/login']);
    this.processSuccessAuth();
  }
}
