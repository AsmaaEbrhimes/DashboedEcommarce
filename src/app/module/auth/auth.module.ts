import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { InputOtpModule } from 'primeng/inputotp';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { VerfiyemailComponent } from './verfiyemail/verfiyemail.component';
import { VerficationcodeComponent } from './verficationcode/verficationcode.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { CreatepasswordComponent } from './createpassword/createpassword.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    VerfiyemailComponent,
    VerficationcodeComponent,
    LogoutComponent,
    ResetpasswordComponent,
    CreatepasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    InputOtpModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
