import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainTabelComponent } from './main-tabel/main-tabel.component';
import { TableModule } from 'primeng/table';
import { SuccessComponent } from './success/success.component';
import { TostrErrorComponent } from './tostr-error/tostr-error.component';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    HeaderComponent,
    MainTabelComponent,
    SuccessComponent,
    TostrErrorComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
        TableModule,

  ],
  exports:[
    HeaderComponent,
    MainTabelComponent,
    SuccessComponent,
    TostrErrorComponent,
  ],
  providers:[
        DatePipe
  ]
})
export class SharedModule { }
