import { StorageService } from '../../../Core/servies/storage.service';
import { DilogAdminUserComponent } from './../dilog-admin-user/dilog-admin-user.component';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from '../Store/Types/typesUser';
import { UserState } from '../Store/Reducser/user.reducer';
import { ObjUser } from '../InterFase/user.interface';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit,OnDestroy {
  @ViewChild(DilogAdminUserComponent)
  dilogAdminUserComponent!: DilogAdminUserComponent;
  private destroy$ = new Subject<void>();
  Users: ObjUser[]=[];
  EventDilogSepasificEdit!: ObjUser | boolean;

  constructor(
    private store: Store<{ user: UserState }>,
    private StorageService:StorageService
  ) {}

  ngOnInit(): void {
    this.setDtaInLocalStorage();
    this.ReadDataInLoaclStorage();
  }

  setDtaInLocalStorage() {
    this.store.dispatch(UserActions.AllUser());
  const users = this.StorageService.get<ObjUser[]>('allUsers') || [];
    this.store.dispatch(UserActions.LoadUsersFromLocalStorage({ users }));
  }

  ReadDataInLoaclStorage() {
    this.store
      .select((state) => state.user)
      .pipe(takeUntil(this.destroy$))
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
    ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
