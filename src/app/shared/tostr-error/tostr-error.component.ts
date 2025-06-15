import { Subscription } from 'rxjs';
import { CoreServiesService } from './../../Core/servies/core-servies.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-tostr-error',
  templateUrl: './tostr-error.component.html',
  styleUrl: './tostr-error.component.scss',
})
export class TostrErrorComponent implements OnInit, OnDestroy {

  message: string | null = null;
  subscription!: Subscription;

  constructor(private CoreServies: CoreServiesService) {}

  ngOnInit(): void {
    this.getErrorMessage();
  }

  getErrorMessage() {
    this.subscription = this.CoreServies.errorMessageSubject$.subscribe(
      (err) => {
        this.message = err;
        if (err) {
          setTimeout(() => {
            this.CoreServies.errorMessageSubject$.next(null);
          }, 3500);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
