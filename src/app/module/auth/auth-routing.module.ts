import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerfiyemailComponent } from './verfiyemail/verfiyemail.component';
import { VerficationcodeComponent } from './verficationcode/verficationcode.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { CreatepasswordComponent } from './createpassword/createpassword.component';

const routes: Routes = [
  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"verfiyemail" , component:VerfiyemailComponent},
  {path:"verfiycode" , component:VerficationcodeComponent},
  {path:"logout" , component:LogoutComponent},
  {path:"resetpasswprd" , component:ResetpasswordComponent},
  {path:"createpassword" , component:CreatepasswordComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
