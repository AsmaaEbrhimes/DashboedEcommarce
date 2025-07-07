import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  dialogVisible = false;
  editDilog!: ObjUser | any;
  myForm!: FormGroup;
  isObjectValue!: boolean;
  isEditMode = false;

  constructor(
    private FB: FormBuilder,
    private store: Store<{ app: AppState }>
  ) {}

  ngOnInit(): void {
    this.checkProccingUser();
  }

  @Input()
  set showDilogEdit(value: ObjUser | boolean) {
    this.editDilog = value;
    this.CkeckTypeValue();
    this.isEditMode = typeof value === 'object' && value !== null;
    this.CreateFormUser();
    if (this.isEditMode) {
      this.PatchUserData();
    }
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
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: [''],
      passwordConfirm: [''],
      phone: [''],
      role: ['admin'],
    });
    if (!this.isEditMode) {
      this.myForm.get('password')?.setValidators([Validators.required]);
      this.myForm.get('passwordConfirm')?.setValidators([Validators.required]);
      this.myForm.get('phone')?.setValidators([Validators.required]);
      this.myForm.get('role')?.setValidators([Validators.required]);
    }

    Object.values(this.myForm.controls).forEach((control) =>
      control.updateValueAndValidity()
    );
  }

  AddUser() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.store.dispatch(UserActions.AddUser({ addData: this.myForm.value }));
  }

  EditUser() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.isEditMode = true;
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

  getControl(controlName: string) {
    return this.myForm.get(controlName);
  }
}
