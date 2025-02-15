import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { CreateproductComponent } from '../products/createproduct/createproduct.component';
import { ViewproductComponent } from '../products/viewproduct/viewproduct.component';

const routes: Routes = [
  {
    path: '',
    component: MaindashboardComponent,
    children: [
      { path: '', component: FirstpageComponent },
      {path:"product/creatproduct" , component:CreateproductComponent},
      {path:"product/viewproduct" , component:ViewproductComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaindashbordRoutingModule { }
