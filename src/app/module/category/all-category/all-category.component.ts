import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActionCategory } from '../Store/TypesCategory/TypesCategory';
@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrl: './all-category.component.scss',
})
export class AllCategoryComponent implements OnInit {
  constructor(private Store: Store) {}

  ngOnInit(): void {
    this.getCategory();
    this.Store.dispatch(ActionCategory.AllCategory());
  }

  getCategory() {
  
  }
}
