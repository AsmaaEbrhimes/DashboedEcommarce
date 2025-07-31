import { StorageService } from '../../../../Core/servies/storage.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, switchMap, tap } from 'rxjs';
import { CategoryService } from '../../category.service';
import { ActionCategory } from '../TypesCategory/TypesCategory';
import { CategoryResponse } from '../../Interface';
import { ActionApp } from '../../../../Store/Types/Types';

@Injectable({ providedIn: 'root' })
export class EffectCategory {
  constructor(
    private action$: Actions,
    private categoryservies: CategoryService,
    private StorageService:StorageService
  ) {}

  getAllCategory$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionCategory.AllCategory),
      switchMap(() =>
        this.categoryservies.getCategories().pipe(
          tap((res: CategoryResponse) => {
            this.StorageService.set('allCategory',res.data)
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
      exhaustMap((action) =>
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
      exhaustMap((action) =>
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
      exhaustMap((action) =>
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
