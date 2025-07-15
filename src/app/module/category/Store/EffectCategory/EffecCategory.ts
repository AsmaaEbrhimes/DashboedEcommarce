import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, tap } from 'rxjs';
import { CategoryService } from '../../category.service';
import { ActionCategory } from '../TypesCategory/TypesCategory';
import { CategoryResponse } from '../../Interface';
import { ActionApp } from '../../../../Store/Types/Types';

@Injectable({ providedIn: 'root' })
export class EffectCategory {
  constructor(
    private action$: Actions,
    private categoryservies: CategoryService
  ) {}

  getAllCategory$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionCategory.AllCategory),
      switchMap(() =>
        this.categoryservies.getCategories().pipe(
          tap((res: CategoryResponse) => {
            localStorage.setItem('allCategory', JSON.stringify(res.data));
          }),
          switchMap((res) => [
            ActionCategory.LoadCategoryFromLocalStorage({
              categories: res.data,
            }),
          ])
        )
      )
    )
  );



 AddCategory$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionCategory.AddCategory),
      switchMap((action) =>
        this.categoryservies.addCategory(action.categoryName).pipe(
          switchMap((res) => {
            return this.refreshCategoriesAndNotify();
          })
        )
      )
    )
  );


  EditCategory$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionCategory.EditCategory),
      switchMap((action) =>
        this.categoryservies.updateCategory(action.id, action.categoryName).pipe(
          switchMap((res) => {
            return this.refreshCategoriesAndNotify();
          })
        )
      )
    )
  );
  DeleteCategory$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionCategory.DeleteCategory),
      switchMap((action) =>
        this.categoryservies.deleteCategory(action.id).pipe(
          switchMap((res) => {
            return this.refreshCategoriesAndNotify();
          })
        )
      )
    )
  );

  private refreshCategoriesAndNotify() {
    return [
      ActionCategory.AllCategory(),
      ActionApp.SucessProccing(),
    ];
  }
}
