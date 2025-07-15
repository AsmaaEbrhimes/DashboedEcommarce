import { Store } from '@ngrx/store';
import { Component, OnInit, signal } from '@angular/core';
import { ActionCategory } from '../Store/TypesCategory/TypesCategory';
import { CategoryState } from '../Store/ReducerCategory/ReducerCategory';
import { Category } from '../Interface';
import { slideToggleAnimation } from '../../../Core/animations/menu-animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from '../../../Store/Reducer/reducer';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrl: './all-category.component.scss',
  animations: [slideToggleAnimation],
})
export class AllCategoryComponent implements OnInit {
  categories = signal<Category[]>([]);
  toggleFormAdd = signal<boolean>(false);
  IsExsistEditObj = signal<boolean>(false);
  CategoryObj = signal<Category | undefined>(undefined);
  formCategory!: FormGroup;

  constructor(
    private Store: Store<{ categoryFeaturesKey: CategoryState }>,
    private StoreApp: Store<{ app: AppState }>,
    private FB: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createFormCategory();
    this.seDataInLocalStorage();
    this.ReadDataInLocalStorage();
    this.HandelSuccessProccing();
  }

  createFormCategory() {
    this.formCategory = this.FB.group({
      name: ['', Validators.required],
    });
  }

  getControls(control: string) {
    return this.formCategory.get(control);
  }

  seDataInLocalStorage() {
    this.Store.dispatch(ActionCategory.AllCategory());
    const stored = localStorage.getItem('allCategory');
    const categories = stored ? JSON.parse(stored) : [];
    this.Store.dispatch(
      ActionCategory.LoadCategoryFromLocalStorage({ categories })
    );
  }

  ReadDataInLocalStorage() {
    this.Store.select(
      (state) => state.categoryFeaturesKey.categories
    ).subscribe((categories: Category[]) => {
      this.categories.set(categories);
    });
  }

  ToggelAddFrom() {
    this.toggleFormAdd.set(!this.toggleFormAdd());
    this.IsExsistEditObj.set(false);
  }

  AddCategory() {
    if (this.formCategory.invalid) {
      this.formCategory.markAllAsTouched();
      return;
    }
    this.Store.dispatch(
      ActionCategory.AddCategory({ categoryName: this.formCategory.value })
    );
  }

  EditCategory() {
    const id = this.CategoryObj()?._id;
    if (!id) {
      return;
    }
    this.Store.dispatch(
      ActionCategory.EditCategory({
        id: id,
        categoryName: this.formCategory.value,
      })
    );
  }

  ShowUiSepasificeEditCategory(category: Category) {
    if (category) {
      this.CategoryObj.set(category);
      this.formCategory.patchValue({ name: category.name });
      this.IsExsistEditObj.set(true);
      this.toggleFormAdd.set(true);
    } else {
      this.IsExsistEditObj.set(false);
      this.toggleFormAdd.set(false);
    }
  }

  get isEditMode(): boolean {
    return this.IsExsistEditObj();
  }

  HandelSuccessProccing() {
    const success$ = this.StoreApp.select((state) => state.app.success);
    success$.subscribe((success) => {
      if (success) {
        this.formCategory.reset();
        this.toggleFormAdd.set(false);
        this.IsExsistEditObj.set(false);
      }
    });
  }
}
