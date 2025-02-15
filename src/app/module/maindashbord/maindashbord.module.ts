import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MaindashbordRoutingModule } from './maindashbord-routing.module';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { MenuebarComponent } from './menuebar/menuebar.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SharedModule } from '../../shared/shared.module';
import { AvatarComponent } from './avatar/avatar.component';
import { ChartModule } from 'primeng/chart';
import { TabelComponent } from './tabel/tabel.component';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  declarations: [
    MaindashboardComponent,
    MenuebarComponent,
    FirstpageComponent,
    AvatarComponent,
    TabelComponent,
    ChartsComponent
  ],
  imports: [
    TableModule,
    CommonModule,
    MaindashbordRoutingModule,
    SharedModule,
    ChartModule
  ]
})
export class MaindashbordModule { }
