import { Store } from '@ngrx/store';
import { Component, OnInit, signal } from '@angular/core';
import { ActionCategory } from '../Store/TypesCategory/TypesCategory';
import { CategoryState } from '../Store/ReducerCategory/ReducerCategory';
import { Category } from '../Interface';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrl: './all-category.component.scss',
})
export class AllCategoryComponent implements OnInit {
  categories = signal<Category[]>([]);

  constructor(private Store: Store<{categoryFeaturesKey: CategoryState}>) {}

  ngOnInit(): void {
    this.seDataInLocalStorage();
    this.ReadDataInLocalStorage();
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
}
