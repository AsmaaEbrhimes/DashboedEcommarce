import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AuthActions } from '../Store/AllTypes/auth.types';
import { Observable } from 'rxjs';
import { AuthState } from '../Store/Reducer/auth.reducer';
import { RequierdEmail } from '../valdtion/EmailValidtion';
import { Router } from '@angular/router';
import { CoreServiesService } from '../../../Core/servies/core-servies.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private FB: FormBuilder,
    private authServies: AuthService,
    private store: Store<{ authFeaturesKey: AuthState }>,
    private router: Router,
    private CoreServiesService:CoreServiesService
  ) {}
  LoginForm!: FormGroup;
  success$!: Observable<boolean>;
  LoadingButton: string = '';
  error$!: Observable<boolean>;

  ngOnInit(): void {
    this.CreateFormLogin();
    this.SuccessResponseLogin();
    this.ErrorResponseLogin();
    this.onLogOut()
  }

  getControl(controlName: string) {
    return this.LoginForm.get(controlName);
  }

  CreateFormLogin() {
    this.LoginForm = this.FB.group({
      email: ['', [RequierdEmail]],
      password: ['', Validators.required],
    });
  }

  LoginAccountUser(loaderText: string) {
    this.LoadingButton = loaderText;
    if (this.LoginForm.invalid) {
      this.LoginForm.markAllAsTouched();
      this.LoadingButton = '';
      return;
    }
    this.store.dispatch(
      AuthActions.isLoginUser({ user: this.LoginForm.value })
    );
  }

  SuccessResponseLogin() {
    this.success$ = this.store.select((state) => state.authFeaturesKey.success);
    this.success$.subscribe((success) => {
      if (success) {
        this.LoadingButton = '';
        this.authServies.processSuccessAuth();
        this.LoginForm.reset();
        setTimeout(() => {
          this.store.dispatch(AuthActions.clearSuccess());
          this.router.navigate(['/']);
        }, 2000);
      }
    });
  }

  ErrorResponseLogin() {
    this.error$ = this.store.select((state) => state.authFeaturesKey.error);
    this.error$.subscribe((error) => {
      if (error) {
        this.LoadingButton = '';
        this.LoginForm.reset();
        setTimeout(() => {
          this.store.dispatch(AuthActions.clearError());
        }, 2000);
      }
    });
  }

    onLogOut() {
    this.CoreServiesService.proccingLogOut();
  }
}
