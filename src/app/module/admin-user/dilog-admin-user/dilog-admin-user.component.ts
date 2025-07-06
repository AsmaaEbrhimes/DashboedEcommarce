import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from '../Store/Types/typesUser';
import { ObjUser } from '../InterFase/user.interface';
import { AppState } from '../../../Store/Reducer/reducer';

@Component({
  selector: 'app-dilog-admin-user',
  templateUrl: './dilog-admin-user.component.html',
  styleUrl: './dilog-admin-user.component.scss',
})
export class DilogAdminUserComponent implements OnInit {
  editDilog!: ObjUser | any;
  myForm!: FormGroup;
  isObjectValue!: boolean;

  constructor(
    private FB: FormBuilder,
    private store: Store<{ app: AppState }>
  ) {}
  ngOnInit(): void {
    this.CreateFormUser();
    this.checkProccingUser();
  }
  @Input()
  set showDilogEdit(value: ObjUser | boolean) {
    this.editDilog = value;
    this.CkeckTypeValue();
    this.PatchUserData();
  }
  get valueEditDilog(): ObjUser | boolean {
    return this.editDilog;
  }

  CkeckTypeValue() {
    if (typeof this.editDilog == 'boolean') {
      this.isObjectValue = false;
    } else if (typeof this.editDilog == 'object' && this.editDilog !== null) {
      this.isObjectValue = true;
    }
  }

  CreateFormUser() {
    this.myForm = this.FB.group({
      name: [''],
      email: [''],
      password: [''],
      passwordConfirm: [''],
      phone: [''],
      role: ['admin'],
    });
  }

  AddUser() {
    this.store.dispatch(UserActions.AddUser({ addData: this.myForm.value }));
  }

  EditUser() {
    const formData = { ...this.myForm.value };
    delete formData.passwordConfirm;
    delete formData.phone;
    delete formData.role;
    this.store.dispatch(
      UserActions.EditUser({
        id: this.editDilog._id,
        EditData: formData,
      })
    );
  }

  PatchUserData() {
    this.myForm.patchValue({
      name: this.editDilog.name,
      email: this.editDilog.email,
      password: this.editDilog.password,
      passwordConfirm: this.editDilog.passwordConfirm,
      phone: this.editDilog.phone,
    });
  }

  ResetForm() {
    this.myForm.reset();
  }

  checkProccingUser() {
    let CheckSuccess = this.store.select((state) => state.app.success);
    CheckSuccess.subscribe((ckecksuccess) => {
      if (ckecksuccess) {
        this.editDilog = null;
      }
    });
  }
}
