import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreServiesService {
  constructor() {}
   errorMessageSubject$ = new BehaviorSubject<string | null>(null);

}
