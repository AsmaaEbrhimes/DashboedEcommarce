
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { CreateproductComponent } from '../products/createproduct/createproduct.component';
import { ViewproductComponent } from '../products/viewproduct/viewproduct.component';
import { AllproductsComponent } from '../products/allproducts/allproducts.component';
import { ShoppingcartComponent } from '../products/shoppingcart/shoppingcart.component';
import { OrdersComponent } from '../products/orders/orders.component';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';
import { AllUsersComponent } from '../admin-user/all-users/all-users.component';

const routes: Routes = [
  {
    path: '',
    component: MaindashboardComponent,
    children: [
      { path: '', component: FirstpageComponent },
      {path:"product/creatproduct" , component:CreateproductComponent},
      {path:"product/viewproduct" , component:ViewproductComponent},
      {path:"product/AllProduct" , component:AllproductsComponent},
      {path:"product/shoppingcart" , component:ShoppingcartComponent},
      {path:"product/order" , component:OrdersComponent},
      {path:"product/DetailsOrder" , component:ProductDetailsComponent},
      {path:"AdminUser/allUser",component:AllUsersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaindashbordRoutingModule { }
