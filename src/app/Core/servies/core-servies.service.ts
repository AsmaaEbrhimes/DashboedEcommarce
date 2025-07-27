import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreServiesService {
  constructor() {}
  private _isLoading = new BehaviorSubject<boolean>(true);
  isLoading$ = this._isLoading.asObservable();

  errorMessageSubject$ = new BehaviorSubject<string | null>(null);

  processSuccessAuth() {
    const audio = new Audio();
    audio.src = 'assets/Audio/success-notification-alert_A_major.wav';
    audio.load();
    audio.play();
  }


}
