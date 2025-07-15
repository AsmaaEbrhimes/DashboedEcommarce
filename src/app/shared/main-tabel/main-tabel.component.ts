import { DatePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ObjUser } from '../../module/admin-user/InterFase/user.interface';
import { Store } from '@ngrx/store';
import { UserActions } from '../../module/admin-user/Store/Types/typesUser';
import { Category } from '../../module/category/Interface';
import { AppState } from '../../Store/Reducer/reducer';
import { CategoryState } from '../../module/category/Store/ReducerCategory/ReducerCategory';
import { ActionCategory } from '../../module/category/Store/TypesCategory/TypesCategory';

@Component({
  selector: 'app-main-tabel',
  templateUrl: './main-tabel.component.html',
  styleUrl: './main-tabel.component.scss',
})
export class MainTabelComponent<T extends object> implements OnInit {
  @Output() edituser = new EventEmitter<ObjUser>();
  @Output() ShowUiSepasificeEditCategory = new EventEmitter<Category>();
  constructor(
    private datePipe: DatePipe,
    private store: Store,
    private categoryStore: Store<{ category: CategoryState }>,
    private StoreApp: Store<{ app: AppState }>
  ) {}

  selectedProducts: any = [];

  @Input() BodyData: T[] = [];
  @Input() page: string = '';

  ngOnInit(): void {
    this.refreshSelectInCheckbox();
  }
  getHeadKeys(): string[] {
    return Array.isArray(this.BodyData) && this.BodyData.length > 0
      ? Object.keys(this.BodyData[0])
      : [];
  }

  formatCellValue(key: string, value: any): any {
    let arrayPage = ['Category', 'users'];
    if (
      (key === 'updatedAt' || key === 'createdAt') &&
      arrayPage.includes(this.page)
    ) {
      return this.datePipe.transform(value, 'shortDate');
    }
    return value;
  }

  onRemoveClick(data: any): void {
    if (this.page === 'users') {
      this.RemoveUser(data);
    } else if (this.page === 'Category') {
      this.RemoveCategory(data);
    }
  }

  RemoveUser(dataUser: ObjUser) {
    this.store.dispatch(UserActions.DeleteUser({ id: dataUser._id }));
  }

  RemoveCategory(dataCategory: any): void {
    this.categoryStore.dispatch(
      ActionCategory.DeleteCategory({ id: dataCategory._id })
    );
    console.log(dataCategory);
  }

  EditUser(dataUser: ObjUser) {
    this.edituser.emit(dataUser);
  }

  onRowSelected(event: any) {
    this.ShowUiSepasificeEditCategory.emit(event.data);
  }
  onRowUnselected() {
    this.ShowUiSepasificeEditCategory.emit();
  }

  refreshSelectInCheckbox() {
    const success$ = this.StoreApp.select((state) => state.app.success);
    success$.subscribe((res) => {
      if (res) {
        this.selectedProducts = [];
      }
    });
  }
}
