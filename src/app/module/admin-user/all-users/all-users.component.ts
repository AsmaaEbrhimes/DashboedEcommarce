import { DilogAdminUserComponent } from './../dilog-admin-user/dilog-admin-user.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from '../Store/Types/typesUser';
import { UserState } from '../Store/Reducser/user.reducer';
import { Observable } from 'rxjs';
import { ObjUser } from '../InterFase/user.interface';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit {
  @ViewChild(DilogAdminUserComponent)
  dilogAdminUserComponent!: DilogAdminUserComponent;

  Users: any;
  EventDilogSepasificEdit!: ObjUser | boolean;

  constructor(private store: Store<{ user: UserState }>) {}

  ngOnInit(): void {
    this.setDtaInLocalStorage();
    this.ReadDataInLoaclStorage();
  }

  setDtaInLocalStorage() {
    this.store.dispatch(UserActions.AllUser());
    const stored = localStorage.getItem('allUsers');
    const users = stored ? JSON.parse(stored) : [];
    this.store.dispatch(UserActions.LoadUsersFromLocalStorage({ users }));
  }

  ReadDataInLoaclStorage() {
    this.store
      .select((state) => state.user)
      .subscribe((userState: any) => {
        this.Users = (userState.users || []).map((user: any) => {
          const { password, ...rest } = user;
          return rest;
        });
      });
  }

  EditUser(event: ObjUser) {
    this.dilogAdminUserComponent.ResetForm();
    this.EventDilogSepasificEdit = event;
  }

  ShowDilogSepasificeAddUser() {
    this.EventDilogSepasificEdit = false;
    setTimeout(() => {
      this.EventDilogSepasificEdit = true;
    }, 0);
  }
}
