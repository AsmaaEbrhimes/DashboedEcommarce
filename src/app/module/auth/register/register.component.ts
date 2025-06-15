import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AuthState } from '../Store/Reducer/auth.reducer';
import { AuthActions } from '../Store/AllTypes/auth.types';
import { Observable, Subscription } from 'rxjs';
import { confirmePasswordValidtors } from '../valdtion/valdtion';
import { RequierdEmail } from '../valdtion/EmailValidtion';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  constructor(
    private FB: FormBuilder,
    private authServies: AuthService,
    private store: Store<{ authFeaturesKey: AuthState }>
  ) {}
  registerForm!: FormGroup;
  success$!: Observable<boolean>;
  error$!: Observable<boolean>;
  LoadingButton: string = '';
  private errorSubscription!: Subscription;

  ngOnInit(): void {
    this.CreateFormRegister();
    this.successResponseRegister();
    this.ErrorResponseRegister();
  }

  CreateFormRegister() {
    this.registerForm = this.FB.group(
      {
        name: ['', Validators.required],
        email: ['',[RequierdEmail]],
        phone: ['', Validators.required],
        password: ['', Validators.required],
        passwordConfirm: ['', Validators.required],
      },
      { validators: confirmePasswordValidtors }
    );
  }

  CreateAccountUser(loaderText: string) {
    this.LoadingButton = loaderText;
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      this.LoadingButton = '';
      return;
    }
    this.store.dispatch(
      AuthActions.isRegisterUser({ user: this.registerForm.value })
    );
  }

  getControls(controleName: string) {
    return this.registerForm.get(controleName);
  }

  successResponseRegister() {
    this.success$ = this.store.select((state) => state.authFeaturesKey.success);
    this.success$.subscribe((success) => {
      if (success) {
        this.LoadingButton = '';
        this.authServies.processSuccessAuth();
        this.registerForm.reset();
        setTimeout(() => {
          this.store.dispatch(AuthActions.clearSuccess());
        }, 2000);
      }
    });
  }

  ErrorResponseRegister() {
    this.error$ = this.store.select((state) => state.authFeaturesKey.error);
    this.error$.subscribe((error) => {
      if (error) {
        this.LoadingButton = '';
        this.registerForm.reset();
        setTimeout(() => {
          this.store.dispatch(AuthActions.clearError());
        }, 2000);
      }
    });
  }
}
