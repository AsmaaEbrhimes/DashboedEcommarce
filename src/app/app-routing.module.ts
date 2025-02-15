import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/maindashbord/maindashbord.module').then(m => m.MaindashbordModule)
  },

  {
    path: 'auth',
    loadChildren: () => import('./module/auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: 'product',
    loadChildren: () => import('./module/products/products.module').then(m => m.ProductsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
