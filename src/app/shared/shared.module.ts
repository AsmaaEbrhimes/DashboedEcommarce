import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainTabelComponent } from './main-tabel/main-tabel.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    HeaderComponent,
    MainTabelComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
        TableModule,
  ],
  exports:[
    HeaderComponent,
    MainTabelComponent
  ]
})
export class SharedModule { }
