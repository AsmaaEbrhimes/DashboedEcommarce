import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, tap } from 'rxjs';
import { CategoryService } from '../../category.service';
import { ActionCategory } from '../TypesCategory/TypesCategory';
import { CategoryResponse } from '../../Interface';

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
}
