

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserRoutingModule } from './admin-user-routing.module';
import { AllUsersComponent } from './all-users/all-users.component';
import { SharedModule } from '../../shared/shared.module';
import { DialogModule } from 'primeng/dialog';
import { DilogAdminUserComponent } from './dilog-admin-user/dilog-admin-user.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffect } from '../admin-user/Store/Effects/user.effect';
import { userReducer } from '../admin-user/Store/Reducser/user.reducer';

@NgModule({
  declarations: [AllUsersComponent, DilogAdminUserComponent],
  imports: [
    CommonModule,
    AdminUserRoutingModule,
    SharedModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // EffectsModule.forFeature([UserEffect]),
    // StoreModule.forFeature('user', userReducer),
  ],
})
export class AdminUserModule {}
