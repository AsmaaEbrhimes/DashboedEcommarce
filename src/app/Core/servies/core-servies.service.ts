import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { StorageType } from '../interfaces/storage-type.enum';

@Injectable({
  providedIn: 'root',
})
export class CoreServiesService {
  constructor(
    private StorageService:StorageService,
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
  this.StorageService.use(StorageType.Session);
  this.StorageService.remove('token');
  this.Roter.navigate(['/auth/login']);
  this.processSuccessAuth();
}
}


