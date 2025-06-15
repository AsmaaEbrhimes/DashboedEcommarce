import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { InputOtpModule } from 'primeng/inputotp';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { VerfiyemailComponent } from './verfiyemail/verfiyemail.component';
import { VerficationcodeComponent } from './verficationcode/verficationcode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { CreatepasswordComponent } from './createpassword/createpassword.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthReducer } from './Store/Reducer/auth.reducer';
import { AuthEffect } from './Store/Effect/auth.effect';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    VerfiyemailComponent,
    VerficationcodeComponent,
    LogoutComponent,
    ResetpasswordComponent,
    CreatepasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    InputOtpModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    EffectsModule.forFeature([AuthEffect]),
    StoreModule.forFeature('authFeaturesKey', AuthReducer),


]
})
export class AuthModule {}
