import { DatePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  output,
} from '@angular/core';
import { ObjUser } from '../../module/admin-user/InterFase/user.interface';
import { Store } from '@ngrx/store';
import { UserActions } from '../../module/admin-user/Store/Types/typesUser';

@Component({
  selector: 'app-main-tabel',
  templateUrl: './main-tabel.component.html',
  styleUrl: './main-tabel.component.scss',
})
export class MainTabelComponent<T extends object> {
  @Output() edituser = new EventEmitter<ObjUser>();
  constructor(private datePipe: DatePipe, private store: Store) {}

  selectedProducts: any = [];

  @Input() BodyData: T[] = [];
  @Input() page: string = '';

  getHeadKeys(): string[] {
    return Array.isArray(this.BodyData) && this.BodyData.length > 0
      ? Object.keys(this.BodyData[0])
      : [];
  }

  formatCellValue(key: string, value: any): any {
    if ((key === 'updatedAt' || key === 'createdAt') && this.page == 'users') {
      return this.datePipe.transform(value, 'shortDate');
    }
    return value;
  }

  RemoveUser(dataUser: ObjUser) {
    this.store.dispatch(
      UserActions.DeleteUser({id: dataUser._id })
    );
  }

  EditUser(dataUser: ObjUser) {
    this.edituser.emit(dataUser);
  }
}
