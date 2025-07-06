import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { securityAuthGuard } from './Core/gurade/security-auth.guard';
const routes: Routes = [
  {
    path: '',
    canActivate: [securityAuthGuard],
    loadChildren: () =>
      import('./module/maindashbord/maindashbord.module').then(
        (m) => m.MaindashbordModule
      ),
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./module/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'AdminUser',
    loadChildren: () =>
      import('./module/admin-user/admin-user.module').then(
        (m) => m.AdminUserModule
      ),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./module/products/products.module').then((m) => m.ProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
